from django.shortcuts import render
from to_do.models import ToDoList, ToDoListItems
from to_do.serializers import ToDoListItemSerializer, ToDoListSerializer
from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse


class CreateList(generics.CreateAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class UpdateList(generics.RetrieveUpdateAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class ViewListOfLists(generics.ListAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

def delete_list(request, pk):
    list_data = get_object_or_404(ToDoList, id=pk)
    list_data.delete()
    return HttpResponse("Deleted")
    















        # if request.method == 'GET':
            #     data = ToDoList.objects.all()
            #     serializer = ListSerializer(data, many=True)
            #     return JsonResponse(serializer.data, safe=False)
        
            # elif request.method == 'POST':
            #     if request.body.decode('utf-8') == "":
            #         return HttpResponse("Please remember to pass in data")
            #     data = JSONParser().parse(request)
            #     serializer = ListSerializer(data=data)
            #     if serializer.is_valid():
            #         serializer.save()
            #         return JsonResponse(serializer.data, status=201)
            #     return JsonResponse(serializer.errors, status=400)