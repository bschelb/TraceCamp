from rest_framework import serializers
from api.models import movieinfo

class movie_serializer(serializers.ModelSerializer):
    class Meta:
        model = movieinfo
        fields = ['id', 'title', 'rating', 'genre']