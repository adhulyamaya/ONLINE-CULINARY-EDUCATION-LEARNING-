
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from .consumers import NotificationConsumer

# application = ProtocolTypeRouter({
#     "websocket": URLRouter([
#         path("ws/booking/", NotificationConsumer),
#     ]),
# })
websocket_urlpatterns =[
   path("ws/booking/", NotificationConsumer.as_asgi()),
]
