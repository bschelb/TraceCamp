# Generated by Django 2.2.3 on 2019-08-10 15:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('to_do', '0002_delete_todo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todolist',
            name='listuserid',
        ),
    ]
