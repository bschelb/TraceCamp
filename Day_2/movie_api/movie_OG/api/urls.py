from django.urls import path
from api import views


urlpatterns = [
    path('',views.blank_url_response),
    path('movieinfo/', views.movie_list),
    path('movieinfo/<int:id>/', views.movie_list_detail)
]