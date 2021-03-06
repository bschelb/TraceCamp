from django.db import models
from django.contrib.auth.models import User


class ToDoList(models.Model):
    list_name = models.CharField(max_length=30)
    listuserid = models.ForeignKey(User, on_delete=models.CASCADE, default='')


class ToDoListItems(models.Model):
    todo_list = models.ForeignKey(
        ToDoList, related_name='items', on_delete=models.CASCADE)
    todo_task = models.TextField()
