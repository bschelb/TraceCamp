from django.urls import path
from api import views

urlpatterns = [
    path('', views.hello_world_response),
    path('kickstartercampaign/', views.kickstarter_list),
    path('kickstartercampaign/<int:id>/', views.kickstarter_campaign_detail),
]