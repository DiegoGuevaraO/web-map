from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Marker, Polygon

# Create your views here.
def mapView(request):
    markers = list(Marker.objects.values())
    for item in markers:
        item['latitud'] = float(item['latitud'])
        item['longitud'] = float(item['longitud'])
    polygons = list(Polygon.objects.values())
    context = {
        'markers': markers,
        'polygons': polygons,
    }
    return render(request, 'map/index.html', context)
