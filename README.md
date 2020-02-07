# books_app
My django-vue.js project about books

This project immitates behaviour of a standard online-library: users can add, remove and edit books as well as search for the particular one using search and sort the books using various filters. Also cursor pagination which is efficient for huge amounts of data is implemented into the project. Backend is build using django-rest-framework and I am using Vue.js+Nuxt.js on the frontend. The datebase is SQLite.
You can find all the requirments in the Pipfile.

In order to run the site you should:
-run the "python manage.py runserver" command in the api directory
-run "npm run dev" in the client directory
