from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import movieinfo
from api.serializers import movie_serializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

def blank_url_response(request):
    return HttpResponse("Howdy Partner, try adding a forward slash (/) and adding 'moviedata' and then if you want a specific movie add another forward slash (/) and the index number of the movie you want.", status=400)

@csrf_exempt
def movie_list(request):
    if request.method == 'GET':
        data = movieinfo.objects.all()
        serializer = movie_serializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        if request.body.decode('utf-8') == '':
            return HttpResponse("You need to enter data to be able to POST to the server", status=400)
        data = JSONParser().parse(request)
        serializer = movie_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def movie_list_detail(request, id):
    try:
        movie = movieinfo.objects.get(pk=id)
    except:
        movie.DoesNotExist
        return HttpResponse("That movie ID was not found", status=400)
    if request.method == 'GET':
        serializer = movie_serializer(movie)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        if request.body.decode('utf-8') == '':
            return HttpResponse("You need to enter data in order to PUT data to the server.", status=400)
        data = JSONParser().parse(request)
        serializer = movie_serializer(movie, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        movie.delete()
        return HttpResponse(status=204)