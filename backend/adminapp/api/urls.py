from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('adminlogin/',AdminLoginView.as_view(),name="adminlogin"),
    path('admin-user-profile/',AdminprofileView.as_view(),name="admin-user-profile"),
    path('admin-mentor-list/',MentorlistView.as_view(),name="admin-mentor-list"),
    path('admin-class-list/',ClasslistView.as_view(),name="admin-class-list"),
    path('mentor-approval/', MentorApprovalView.as_view(), name='mentor-approval'),
    ]


