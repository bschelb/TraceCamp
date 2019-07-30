""" from django.core.management.base import BaseCommand
from api.models import Kickstarter_Campaign

class Command(BaseCommand):
    help = 'loads data from file into database'

    def add_arguments(self, parser):
        parser.add_argument('path', nargs='+', type)

    def handle(self, *args, **options):
         """