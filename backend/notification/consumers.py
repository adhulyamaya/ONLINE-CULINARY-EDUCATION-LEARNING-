# # consumers.py in your notification app
# import json
# from channels.generic.websocket import AsyncWebsocketConsumer
# from .serializers import NotificationSerializers

# class NotificationConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         pass

#     async def receive(self, text_data):
#         data = json.loads(text_data)
#         message = data.get('message', '')

#         # Use the serializer to ensure a consistent format
#         serializer = NotificationSerializers(data={'message': message})
#         if serializer.is_valid():
#             formatted_message = serializer.validated_data['message']

#             # Handle the received message, if needed

#             # Send the formatted message to the WebSocket
#             await self.send_notification(formatted_message)

#     async def send_notification(self, message):
#         # Send notification to the WebSocket
#         await self.send(text_data=json.dumps({
#             'message': message
#         }))
# consumers.py in your app
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Notification

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        # Fetch and send existing notifications to the client
        user = self.scope['user']
        notifications = Notification.objects.filter(user=user, is_read=False)

        for notification in notifications:
            await self.send_notification(notification.content)

        # Add the connection to the group
        await self.channel_layer.group_add(
            'notifications_group',
            self.channel_name
        )

    async def disconnect(self, close_code):
        # Remove the connection from the group
        await self.channel_layer.group_discard(
            'notifications_group',
            self.channel_name
        )

    async def receive(self, text_data):
        # Handle received messages, if needed
        pass

    async def send_notification(self, message):
        # Send notification to the WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
