from django.shortcuts import redirect, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

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

def addMarker(request):
    name = request.POST.get('nombre', False)
    desc = request.POST.get('descripcion', False)
    lat = request.POST.get('latitud', False)
    lng = request.POST.get('longitud', False)

    marcador = Marker(nombre=name, descripcion=desc, latitud=lat, longitud=lng)
    marcador.save()

    return redirect(request.META['HTTP_REFERER'])