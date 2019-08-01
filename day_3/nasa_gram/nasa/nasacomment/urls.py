from django.urls import path
from nasacomment import views


urlpatterns=[
    path('home/', views.home),
    path('create/', views.create),
    path('picture_list/', views.picture_list),
    path('update/<int:id>', views.edit),
]