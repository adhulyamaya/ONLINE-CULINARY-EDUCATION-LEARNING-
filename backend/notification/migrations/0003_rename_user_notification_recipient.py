# Generated by Django 5.0.1 on 2024-03-02 20:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notification', '0002_remove_notification_content_type_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notification',
            old_name='user',
            new_name='recipient',
        ),
    ]
