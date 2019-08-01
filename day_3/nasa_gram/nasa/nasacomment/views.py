from django.shortcuts import render
from django.http import HttpResponse
from nasacomment.models import Comment
import requests
import datetime


def home(request):
    comments = Comment.objects.all()
    return render(request, 'very_nice_homepage.html', context = {'comments' : comments})

def edit(request, id):
    comments = Comment.objects.get(id=id)
    if request.method == 'GET':
        #url = request.GET.get('picture_url')
        return render(request, 'edit.html', context = {'comments' : comments})
    elif request.method == 'POST':
        comments.comment = request.POST.get('comment', '')
        comments.rating = request.POST.get('rating', '')
        comments.save()
        return HttpResponse("Form has been successfully updated")


def picture_list(request):
    api_key = '4LpykqoNETeZFCkk9JDsPDzuk3sT4f5BjQHox2wZ'
    urls = []
    initial_date = datetime.datetime.today()
    for num in range(2,10):
        date =  datetime.datetime.isoformat((initial_date - datetime.timedelta(days = num)))
        final_date = date[0:10]
        response = requests.get(F'https://api.nasa.gov/planetary/apod?date={final_date}&api_key={api_key}')
        url = response.json()['url']
        urls.append(url)
    return render(request, 'picture_list.html', context = {'urls': urls})

def create(request):
    if request.method == 'GET':
        url = request.GET.get('picture_url')
        return render(request, 'form.html', context = {'url': url})
    elif request.method == 'POST':
        Comment.objects.create(
            image = request.POST.get('url', ''),
            comment = request.POST.get('comment', ''),
            rating = request.POST.get('rating', ''),
        )
        return HttpResponse("Form has been successfully submitted")

# GET comments - get a list of comments
# POST comments - create a comment
# GET comments/1234 - get a single comment by id
# PUT comments/1234 - update a comment by id
# PATCH comments/1234 - update a comment by id
# DELETE comments/1234 - update a comment by id

# GET /update-comment - pass in variables via query parameters
