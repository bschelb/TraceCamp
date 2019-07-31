from django.db import models

class movieinfo(models.Model):
    title = models.CharField(max_length=50)
    rating = models.FloatField()
    genre = models.CharField(max_length=50)
