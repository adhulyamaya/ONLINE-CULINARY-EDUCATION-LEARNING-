from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from notification.models import Notification
from .serializers import NotificationSerializer
from myapp.models import UserProfile



class Notifications(APIView):
    def get(self,request):
        
        user=UserProfile.objects