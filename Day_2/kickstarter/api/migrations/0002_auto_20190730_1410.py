# Generated by Django 2.2.3 on 2019-07-30 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='kickstarter_campaign',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='kickstarter_campaign',
            name='converted',
            field=models.FloatField(),
        ),
    ]
