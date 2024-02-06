from django.http import HttpResponse
from django.shortcuts import render
from mentorapp.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken


class MentorSignupView(APIView):
    def post(self, request):
        name = request.data.get('name')
        print(name,"kitunno")
        password = request.data.get('password')
        mentorobj = MentorProfile.objects.create(name=name, password=password,email='anu@example.com' )
        mentor_id = mentorobj.id  
        print(mentorobj, "mentorobject")
        print(mentor_id)
        return Response({"message": "success", "mentor_id": mentor_id}) 
    

class MentorLoginView(APIView):
    def post(self,request):
        name=request.data.get('name')
        password=request.data.get('password')

        userobj = MentorProfile.objects.get(name=name,password=password)
        print(userobj,"haiiiiiiiiiiiiii")
        if userobj:
            if userobj.is_approved:

                refresh = RefreshToken.for_user(userobj)
                serialized = MentorProfileSerializer(userobj)

                print(serialized.data,"mentorrrrrrrrserialized.data")
                return Response({"message":"success","mentordata":serialized.data,"refresh":str(refresh),"access":str(refresh.access_token)})
            else:
                return Response({"message": "Mentor not yet accepted by admin"})
        else:
            return Response({"message":"invalid credentials"})

class MentorOnboard(APIView):
    def post(self,request):
        mentor_id=request.data.get('mentor_id')
        print(mentor_id,"aaaaaaaaaaaa")
        mentor_profile = MentorProfile.objects.get(id=mentor_id)
        fullname=request.data.get('fullname')
        email=request.data.get('email')
        bio=request.data.get('bio')
        expertise=request.data.get('expertise')
        experience=request.data.get('experience')
        age=request.data.get('age')
        image=request.data.get('image')
        address=request.data.get('address')
        certificate=request.data.get('certificate')
        availability_start_time = request.data.get('availability_start_time')
        availability_end_time = request.data.get('availability_end_time')

        mentor_profile.fullname=fullname
        mentor_profile.email = email
        mentor_profile.bio = bio
        mentor_profile.expertise = expertise
        mentor_profile.experience = experience
        mentor_profile.age=age
        mentor_profile.image=image
        mentor_profile.address=address
        mentor_profile.certificate=certificate
        mentor_profile.availability_start_time = availability_start_time
        mentor_profile.availability_end_time = availability_end_time
        # mentor_profile.is_approved = False
        mentor_profile.save()
        return Response({"message":"success"})
    
    
class CreateclassView(APIView):
    def post(self, request):
        mentor_id = request.data.get('mentorId')  
        class_name = request.data.get("classname")
        course_description = request.data.get('description')
        price = request.data.get('price')
        syllabus = request.data.get('syllabus')

        try:
            mentor = MentorProfile.objects.get(id=mentor_id)
        except MentorProfile.DoesNotExist:
            return Response({"message": f"Mentor with ID {mentor_id} not found"})

        classobj = Class.objects.create(
            mentor=mentor,
            class_name=class_name,
            course_description=course_description,
            price=price,
            syllabus=syllabus
        )

        serialized = ClassSerializer(classobj)
        return Response({"message": "success", "data": serialized.data})
    
class ClassdetailsView(APIView):
    def get(self,get):
        classdetails=Class.objects.all()
        print(classdetails,"enth kunthann")
        if classdetails:
            serializer=ClassSerializer(classdetails,many=True)
            return Response({'message':'passed','userdata':serializer.data})
        

class GetEditView(APIView):
    def get(self,request,id):
        userobj=Class.objects.get(id=id)
        print(userobj,"hi im that datas")

        serialized=ClassSerializer(userobj)
        return Response({"message":"success","data":serialized.data})

            

class EditingClassView(APIView):
    def post(self, request):
        id = request.data.get('id')
        classname = request.data.get('classname')
        description = request.data.get('description')
        price = request.data.get('price')
        syllabus = request.data.get('syllabus')

        class_obj = Class.objects.get(id=id)

        class_obj.class_name = classname
        class_obj.course_description = description
        class_obj.price = price
        class_obj.syllabus = syllabus

        class_obj.save()

        serialized = ClassSerializer(class_obj)
        return Response({"message": "success", "data": serialized.data})

class DeleteView(APIView):
    def post(self,request,id):
        try:
            classobj=Class.objects.get(id=id)
            classobj.delete()
            return Response({"message":"success"})
        except:
            return Response({"message":"failed"})



class ToggleEnableDisableView(APIView):
    def patch(self, request, id):
        print(id,"..................................")
    
        course = Class.objects.get(id=id)
        print(course,"?????????????????????")
        course.enabled = not course.enabled
        course.save()
        serialized = ClassSerializer(course)
        return Response({"message": "success", "data": serialized.data})


class MentorAvailabilityView(APIView):
    def get(self, request, mentor_id):
        print(mentor_id,"////////")
        try:
            mentor = MentorProfile.objects.get(id=mentor_id)
            print(mentor,".............peru")
            
            available_times = self.get_available_times(mentor)
            return Response(available_times)
        except MentorProfile.DoesNotExist:
            return Response({"error": "Mentor not found"})

# class MentorAvailabilityView(APIView):
#     def get(self, request):
#         print(request.data )
#         # Retrieve available time slots from the database or any other source
#         # This is a placeholder, adjust it based on how you store mentor availability in your model
#         try:
#             mentor_id = request.data.get('mentor_id')
#             print(mentor_id,"aara")
#             mentor = MentorProfile.objects.get(id=mentor_id)
#             available_times = self.get_available_times(mentor)
#             print(available_times,"vanno")
#             return Response(available_times)
#         except MentorProfile.DoesNotExist:
#             return Response({"error": "Mentor not found"})
        
# class BookingStoringView(APIView):
#     def post(self,request):
class StoreOrderView(APIView):
    def post(self, request):
        try:
            data = request.data
            print(data,"nthoke datas vannitund")
            # order_id = data.get('orderID')
            client_id = data.get('clientID')
            user_details = data.get('userDetails') 
            course_details = data.get('courseDetails')
            
            print(course_details,"course details vanno")
            print(user_details,client_id,"user details oo") 
            user_profile = UserProfile.objects.get(username=user_details.get('username'))
            print(user_profile,"nthaaaaaaaaaaaaaaaaaaaaa")


            user_id = user_details.get('id')  
            print(user_id,"...................................kk")
            course_id = course_details.get('class_id')
            print(course_id,";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kk")
            class_name = course_details.get('class_name')
            booked_class = Class.objects.get(class_name=class_name)

            order = Order.objects.create(
                student_id=user_id,
                booked_class=booked_class,
                payment_amount=course_details.get('price'),
            )
            # order.save()
            print(order,"order create aayo")

            return Response({'success': True, 'message': 'Order details stored successfully'})
        except Exception as e:
             return Response({'success': False, 'message': str(e)})
        


        