from rest_framework import viewsets
from rest_framework import filters

from .models import Book
from .serializers import BookSerializer
from .paginators import BookPageNumberPagination


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    pagination_class = BookPageNumberPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, ]
    search_fields = ("name", "author_name", )
    ordering = ("-pub_date", )
    ordering_fields = ("name", "author_name", "price")
