# mentor/routing.py

from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from .consumers import MentorNotificationConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("ws/notifications/", MentorNotificationConsumer.as_asgi()),
    ]),
})
