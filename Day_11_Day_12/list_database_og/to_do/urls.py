from django.urls import path
import to_do.views as views

urlpatterns = [
    path('create/', views.CreateList.as_view()),
    path('list/',views.ViewListOfLists.as_view()),
    path('detail/<int:pk>/', views.UpdateList.as_view()),
    path('delete/<int:pk>/', views.delete_list),
]