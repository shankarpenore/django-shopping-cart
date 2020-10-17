from django.urls import path, include
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name='home'),
    path('cart/', views.cart, name='cart'),
]