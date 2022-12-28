from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Marker, Polygon

# Create your views here.
def mapView(request):
    markers = Marker.objects.all()
    polygons = Polygon.objects.all()
    context = {
        'markers': markers,
        'polygons': polygons,
    }
    return render(request, 'map/index.html', context)
