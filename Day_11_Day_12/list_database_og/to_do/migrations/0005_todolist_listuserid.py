# Generated by Django 2.2.3 on 2019-08-10 15:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('to_do', '0004_auto_20190810_1548'),
    ]

    operations = [
        migrations.AddField(
            model_name='todolist',
            name='listuserid',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
