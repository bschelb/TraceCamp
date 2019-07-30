from django.db import models

class Kickstarter_Campaign(models.Model):
    backers = models.IntegerField()
    blurb = models.CharField(max_length=135)
    converted = models.FloatField()
    created = models.DateTimeField(auto_now=True)