# Generated by Django 4.1.4 on 2022-12-29 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0002_alter_marker_latitud_alter_marker_longitud'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='marker',
            name='icono',
        ),
    ]
