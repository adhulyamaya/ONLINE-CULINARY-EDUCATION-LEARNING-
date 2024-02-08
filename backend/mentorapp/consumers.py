# mentor/consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer

class MentorNotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # You can add additional logic here based on the message received
        # For example, check the type of notification and take appropriate actions

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
