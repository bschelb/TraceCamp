from django.core.management.base import BaseCommand
from api.models import movieinfo
import json
import csv

class Command(BaseCommand):
    help = "Load data into the database from a file"

    def add_arguments(self, parser):
        parser.add_argument('path', type=str)

    def handle(self, *arg, **options):
        with open(options['path'], encoding='utf-8') as f:
            json_data = json.load(f)
            for movie in json_data:
                movieinfo.objects.create(
                    title=movie['title'],
                    rating=movie['rating'],
                    genre=movie['genre']
                )