from rest_framework import pagination


class BookPageNumberPagination(pagination.CursorPagination):
    ordering = '-pub_date'
    page_size = 4
