from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100,primary_key=True)
    desc = models.CharField(max_length=100,blank=True,null=True)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, blank=False,null=False)
    desc = models.CharField(max_length=256)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.FloatField(default=0.0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True, upload_to='images/', default='default.jpg' ,unique=True)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return  self.name


class Review(models.Model):
    choices = (
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5))
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    reviewer = models.ForeignKey(User,on_delete=models.CASCADE)
    review = models.TextField(verbose_name='review')
    rating = models.IntegerField(choices=choices)


class CartDetails(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    @property
    def total(self):
        return self.quantity * self.item.price

    class Meta:
        unique_together = ('user', 'item')


class Order(models.Model):
    order = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False, blank=False)