# import json
# from channels.generic.websocket import WebsocketConsumer
# from channels.db import database_sync_to_async
# from asgiref.sync import async_to_sync


# class NotificationConsumer(WebsocketConsumer):
#     async def connect(self):
#         print("testing connection and redis")
#         await self.accept()
#         # self.send(text_data=json.dumps({'status':"connected"}))


# import json
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import AsyncWebsocketConsumer

# class NotificationConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.group_name = 'public_room'
#         await self.channel_layer.group_add(
#             self.group_name,
#             self.channel_name
#         )
#         await self.accept()

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(
#             self.group_name,
#             self.channel_name
#         )

#     async def send_notification(self, event):
#         await self.send(text_data=json.dumps({ 'message': event['message'] }))
# consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']

        # process the message as needed
        # send a notification back to the client
        await self.send(text_data=json.dumps({'message': message}))
