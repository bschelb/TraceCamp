from django.core.management.base import BaseCommand
from api.models import Kickstarter_Campaign
import csv
import datetime

class Command(BaseCommand):
    help = 'loads data from file into database'

    def add_arguments(self, parser):
        parser.add_argument('path', type=str)

    def handle(self, *args, **options):
        print("This is the path:", options['path'])
        with open(options['path']) as f:
            reader = csv.reader(f)
            count=0
            for row in reader:
                if count is 0:
                    count += 1
                    continue
                Kickstarter_Campaign.objects.create(
                    backers=row[0],
                    blurb=row[1],
                    converted=float(row[3]),
                    created=datetime.datetime.fromtimestamp(int(row[3])/1000.0)
                    )
            # creates a tuple of the new object or
            # current object and a boolean of if it was created