from rest_framework import serializers
from mentorapp.models import MentorProfile,Class,Order


class MentorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorProfile
        fields ='__all__'

       
class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields ='__all__'        


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields ='__all__'         