# Generated by Django 5.0.1 on 2024-03-03 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentorapp', '0015_order_booking_ampm'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='confirmation_status',
            field=models.BooleanField(default=False),
        ),
    ]