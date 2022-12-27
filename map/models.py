from django.db import models

# Create your models here.
class Marker(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=120)
    latitud = models.DecimalField(max_digits=4, decimal_places=4)
    longitud = models.DecimalField(max_digits=4, decimal_places=4)
    icono = models.CharField(max_length=250)
    def __str__(self):
        return self.latitud

    def __str__(self):
        return self.longitud

    def __str__(self):
        return self.nombre

    def __str__(self):
        return self.descripcion
        
class Polygon(models.Model):
    nombre = models.CharField(max_length=50)
    coordenadas = models.JSONField()
