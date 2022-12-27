from django.urls import path

from . import views

app_name = 'map'

urlpatterns = [
    path('map/', views.mapview, name='mapview'),
]
