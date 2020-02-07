from datetime import date

from django.db import models


class Book(models.Model):
    name = models.CharField(max_length=155)
    picture = models.FileField(default="book-cover-placeholder.png")
    pub_date = models.DateField(verbose_name="Published at", default=date.today)
    author_name = models.CharField(max_length=255)  # author should be a custom User model
    price = models.PositiveIntegerField()
    description = models.TextField()

    def __str_(self):
        return f'{self.name}'
