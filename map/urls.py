from django.urls import path

from . import views

app_name = 'map'

urlpatterns = [
    path('', views.mapView, name='map'),
    path('agregar/', views.addMarker, name='addMarker'),
    path('remover/', views.removerMarker, name='removerMarker'),
]
