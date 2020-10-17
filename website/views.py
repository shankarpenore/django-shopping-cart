from django.shortcuts import render
from . import  models
import random
# Create your views here.
def home(request):
    queryset = models.Product.objects.all()
    watches = queryset.filter(category='watches')
    shoes  = queryset.filter(category='footware')
    return render(request, 'website/home.html', {'products': queryset, 'watches': watches, 'shoes': shoes})



def cart(request):
    queryset = models.CartDetails.objects.all().filter(user='1')
    for each in queryset:
        print(each.item.image)
    return render(request, 'website/cart.html', {'cart': queryset})