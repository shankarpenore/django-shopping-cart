# Generated by Django 2.2 on 2020-10-04 11:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_auto_20201004_1629'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='product',
        ),
        migrations.RemoveField(
            model_name='review',
            name='reviewer',
        ),
        migrations.DeleteModel(
            name='Product',
        ),
        migrations.DeleteModel(
            name='Review',
        ),
    ]
