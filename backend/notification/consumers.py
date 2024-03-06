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
        print("WebSocket connectedddd")
        await self.accept()

    @database_sync_to_async
    def get_user_profile(self, user_id):
        return UserProfile.objects.get(pk=user_id)

    @database_sync_to_async
    def create_notification(self, recipient, content):
        return Notification.objects.create(recipient=recipient, content=content)
    print(create_notification)

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
                print(notification,"enth details okke varunnundd....")
               
                recipient_data = {'id': recipient.id, 'username': recipient.username}  # Adjust based on your UserProfile model fields
                notification_data = {
                    'id': notification.id,
                    'content': notification.content,
                    'timestamp': str(notification.timestamp),
                }

                print(notification_data,"checkkkking notiofication data")
                # Sending the notification to the recipient's WebSocket
                await self.send(text_data=json.dumps({
                    'type': 'notification',
                    'recipient': recipient_data,
                    "notification":notification_data,
                }))
                print("data sendeddddddddd")
            else:
                print("Invalid message format: 'recipient_id' or 'content' is missing.")
        except json.JSONDecodeError:
            print("Invalid JSON format in the received data.")

        except Exception as e:

          print(f"Error during sending: {e}")




    async def disconnect(self, close_code):
        print("WebSocket DISSSSconnectedddd")
        await self.close(close_code)

















# import json
# from channels.generic.websocket import AsyncWebsocketConsumer
# from myapp.models import UserProfile
# from notification.models import Notification
# from channels.db import database_sync_to_async

# class NotificationConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         if 'user' in self.scope:
#             user = self.scope['user']
#             if user.isAuthenticated:
#                 user_id = str(user.id)
#                 self.room_group_name = f'notifications_{user_id}'
#                 await self.channel_layer.group_add(
#                     self.room_group_name,
#                     self.channel_name
#                 )
#                 await self.accept()
#             else:
#                 await self.close()
#         else:
#             await self.close()

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(
#             self.room_group_name,
#             self.channel_name
#         )
#         await self.close(close_code)

#     @database_sync_to_async
#     def get_user_profile(self, user_id):
#         return UserProfile.objects.get(pk=user_id)

#     @database_sync_to_async
#     def create_notification(self, recipient, content):
#         return Notification.objects.create(recipient=recipient, content=content)

#     async def receive(self, text_data):
#         try:
#             data = json.loads(text_data)
#             recipient_id = data.get('recipient_id')
#             content = data.get('content')

#             if recipient_id is not None and content is not None:
#                 recipient = await self.get_user_profile(recipient_id)
#                 notification = await self.create_notification(recipient, content)

#                 recipient_data = {'id': recipient.id, 'username': recipient.username}
#                 notification_data = {
#                     'id': notification.id,
#                     'content': notification.content,
#                     'timestamp': str(notification.timestamp),
#                 }

#                 # Sending the notification to the recipient's WebSocket and channel group
#                 await self.send(text_data=json.dumps({
#                     'type': 'notification',
#                     'recipient': recipient_data,
#                     'notification': notification_data,
#                 }))

#                 # Sending the notification to the recipient's channel group
#                 await self.channel_layer.group_send(
#                     self.room_group_name,
#                     {
#                         'type': 'notification.message',
#                         'content': notification_data,
#                     }
#                 )
#             else:
#                 print("Invalid message format: 'recipient_id' or 'content' is missing.")
#         except json.JSONDecodeError:
#             print("Invalid JSON format in the received data.")
#         except Exception as e:
#             print(f"Error during sending: {e}")

#     async def notification_message(self, event):
#         content = event['content']
#         await self.send(text_data=json.dumps({
#             'type': 'notification',
#             'notification': content,
#         }))
