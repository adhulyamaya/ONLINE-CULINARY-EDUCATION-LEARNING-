# Generated by Django 4.1.7 on 2023-12-01 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_alter_userprofile_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='phone',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
