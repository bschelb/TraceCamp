from django.shortcuts import render
from to_do.models import ToDoList, ToDoListItems
from to_do.serializers import ToDoListItemSerializer, ToDoListSerializer, ToDoListItemSerializerAll, ToDoListSerializerAll, BlankToDoListSerializer
from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse


class CreateList(generics.CreateAPIView):
    queryset = ToDoList.objects.values()
    serializer_class = ToDoListSerializer

class UpdateList(generics.RetrieveUpdateAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class ViewListOfLists(generics.ListAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializerAll

class DetailView(generics.RetrieveAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializerAll

def delete_list(request, pk):
    list_data = get_object_or_404(ToDoList, id=pk)
    list_data.delete()
    return HttpResponse('Deleted')

class ViewToDos(generics.ListCreateAPIView):
    queryset = ToDoListItems.objects.all()
    serializer_class = ToDoListItemSerializerAll


class SingleToDo(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDoListItems.objects.all()
    serializer_class = ToDoListItemSerializerAll


class CreateSingleTodo(generics.CreateAPIView):
    queryset = ToDoListItems.objects.all()
    serializer_class = ToDoListItemSerializerAll
