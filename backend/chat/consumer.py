# import json
# # from asgi_django.middleware.csrf import CSRFContextMiddleware
# from channels.auth import channel_auth_middleware
# from channels.generic.websocket import AsyncWebsocketConsumer

# class ChatConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = f'chat_{self.room_name}'

#         # Add auth middleware if needed
#         await self.channel_layer.group_add(self.room_group_name, self.channel_name)
#         await self.accept()

#     async def disconnect(self, close_code):
#         # Leave the room group
#         await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

#     async def receive(self, text_data):
#         received_data = json.loads(text_data)
#         message = received_data['message']

#         # Broadcast to the chat room
#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message
#             }
#         )

#     async def chat_message(self, event):
#         message = event['message']

#         # Send the message to the WebSocket
#         await self.send(text_data=json.dumps({'message': message}))


import json
from chat.models import ChatMessage
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = 'chat_room'
        self.room_group_name = f'chat_{self.room_name}'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        # Accept the WebSocket connection
        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print('Received message:', text_data_json)
        message = text_data_json['message']
        sender_type = text_data_json['sender_type']
        sender_id = text_data_json['sender_id']
        receiver_type = text_data_json['receiver_type']
        receiver_id = text_data_json['receiver_id']

        # Save message to database 
        await self.save_message_to_database(message, sender_type, sender_id, receiver_type, receiver_id)

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender_type': sender_type,
                'sender_id': sender_id,
                'receiver_type': receiver_type,
                'receiver_id': receiver_id,
            }
        )

    async def chat_message(self, event):
        # Send message to WebSocket
        message = event['message']
        sender_type = event['sender_type']
        sender_id = event['sender_id']
        receiver_type = event['receiver_type']
        receiver_id = event['receiver_id']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'sender_type': sender_type,
            'sender_id': sender_id,
            'receiver_type': receiver_type,
            'receiver_id': receiver_id,
        }))
        print('Sent message:', event)

    @sync_to_async
    def save_message_to_database(self, message, sender_type, sender_id, receiver_type, receiver_id):
        # Save message to database
        # You'll need to adjust this according to your Django models
        ChatMessage.objects.create(
            sender_type=sender_type,
            sender_id=sender_id,
            receiver_type=receiver_type,
            receiver_id=receiver_id,
            message=message
        )
