from django.urls import path
import to_do.views as views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('create/', views.CreateList.as_view()),
    path('list/', views.ViewListOfLists.as_view()),
    path('detail/<int:pk>/', views.UpdateList.as_view()),
    path('delete/<int:pk>/', views.delete_list),
    path('view_todos/', views.ViewToDos.as_view()),
    path('single_todo/<int:pk>/', views.SingleToDo.as_view()),
    path('single_todo/', views.CreateSingleTodo.as_view()),
    path('login/', auth_views.login, name='login'),
    path('logout/', auth_views.logout, name='logout'),
]
