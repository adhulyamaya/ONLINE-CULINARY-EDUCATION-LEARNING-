# Generated by Django 5.0.1 on 2024-02-07 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentorapp', '0014_order_booking_date_order_booking_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='booking_ampm',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
    ]