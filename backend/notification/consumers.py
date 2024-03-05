# import json
# from channels.generic.websocket import AsyncWebsocketConsumer
# from myapp.models import UserProfile
# from notification.models import Notification
# from channels.db import database_sync_to_async

# class NotificationConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         await self.close(close_code)

#     async def receive(self, text_data):
#         try:
#             data = json.loads(text_data)
#             print(data,"datavaluee enthokeya")
#             recipient_id = data.get('recipient_id')
#             content = data.get('content')

#             if recipient_id is not None and content is not None:
#                 recipient = UserProfile.objects.get(pk=recipient_id)
#                 notification = Notification.objects.create(recipient=recipient, content=content)
#                 # Sending the notification to the recipient's WebSocket
#                 await self.send(text_data=json.dumps({
#                     'type': 'notification',
#                     'content': f'New Notification: {notification.content}',
#                     'timestamp': str(notification.timestamp),
#                 }))
#             else:
#                 # Handle the case when 'recipient_id' or 'content' is missing in the received data
#                 print("Invalid message format: 'recipient_id' or 'content' is missing.")
#         except json.JSONDecodeError:
#             # Handle the case when the received data is not a valid JSON
#             print("Invalid JSON format in the received data.")



import json
from channels.generic.websocket import AsyncWebsocketConsumer
from myapp.models import UserProfile
from notification.models import Notification
from channels.db import database_sync_to_async

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        await self.close(close_code)

    @database_sync_to_async
    def get_user_profile(self, user_id):
        return UserProfile.objects.get(pk=user_id)

    @database_sync_to_async
    def create_notification(self, recipient, content):
        return Notification.objects.create(recipient=recipient, content=content)

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
            print(data, "datavaluee enthokeya")
            recipient_id = data.get('recipient_id')
            print(recipient_id, "datavaluee enthokeya")
            content = data.get('content')

            if recipient_id is not None and content is not None:
                recipient = await self.get_user_profile(recipient_id)
                notification = await self.create_notification(recipient, content)

                # Sending the notification to the recipient's WebSocket
                await self.send(text_data=json.dumps({
                    'type': 'notification',
                    'content': f'New Notification: {notification.content}',
                    'timestamp': str(notification.timestamp),
                }))
            else:
                # Handle the case when 'recipient_id' or 'content' is missing in the received data
                print("Invalid message format: 'recipient_id' or 'content' is missing.")
        except json.JSONDecodeError:
            # Handle the case when the received data is not a valid JSON
            print("Invalid JSON format in the received data.")
