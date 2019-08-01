from django.db import models
from django.core.validators import URLValidator, MaxValueValidator, MinValueValidator
class Comment(models.Model):
    image = models.TextField(validators=[URLValidator()])
    comment = models.CharField(max_length = 300)
    rating = models.IntegerField(default=0, validators=[MaxValueValidator(5),MinValueValidator(0)])

    def __str__(self):
        return f"{self.comment} Rating {self.rating}"