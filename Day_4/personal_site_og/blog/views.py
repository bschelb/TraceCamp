from django.shortcuts import render
from blog.models import Post
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView

class PostCreate(CreateView):
    model = Post
    fields = ['title', 'body']
    success_url = '/blog/list/'

class PostList(ListView):
    model = Post

class PostUpdate(UpdateView):
    model = Post
    fields = ['title', 'body']
    success_url = '/blog/list'

class PostDelete(DeleteView):
    model = Post
    success_url = '/blog/list'