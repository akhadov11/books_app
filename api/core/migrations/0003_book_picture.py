# Generated by Django 2.2.7 on 2019-12-04 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20191201_1947'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='picture',
            field=models.FileField(default='books_app/client/static/images/book-cover-placeholder.png', upload_to=''),
        ),
    ]
