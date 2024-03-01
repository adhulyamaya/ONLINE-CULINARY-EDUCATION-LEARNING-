import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async


class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("WebSocket Connection checking hihi!")
        await self.accept()
    #     await self.accept()

    # async def disconnect(self, close_code):
    #     pass

    # async def receive(self, text_data):
    #     text_data_json = json.loads(text_data)
    #     message = text_data_json['message']

    #     await self.send(text_data=json.dumps({
    #         'message': message
    #     }))



