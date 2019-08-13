from django.db import models
from django.contrib.auth.models import User

class ToDoList(models.Model):
    list_name = models.CharField(max_length=30)
    listuserid = models.ForeignKey(User, on_delete=models.CASCADE, default='')

    # def __str__(self):
    #     list_entry = [entry for entry in self.listitems]
    #     return str(list_entry)

class ToDoListItems(models.Model):
    todo_list = models.ForeignKey(ToDoList, related_name='items', on_delete=models.CASCADE)
    todo_task = models.TextField()


# class ToDo(models.Model):
#     listitemcontent = models.TextField()
#     listtaskuserid = models.ForeignKey(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.listitemcontnet