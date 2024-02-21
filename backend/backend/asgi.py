"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""


import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
from notification.consumers import NotificationConsumer 
# Use the ProtocolTypeRouter to route WebSocket requests to the application
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter([
        path("ws/booking/", NotificationConsumer.as_asgi()),  
       
    ]),
})