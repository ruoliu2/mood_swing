from django.urls import path

from .views import *
# Create your tests here.
urlpatterns = [
    path('user-in-room', UserInRoom.as_view()),
]
