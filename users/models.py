from django.db import models
from django.contrib.auth.models import AbstractUser 

class User(AbstractUser):
    profile_image = models.ImageField(upload_to='profile_photos', height_field=None, width_field=None, max_length=None)
    post = models.CharField(max_length=50, default=True)

    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username
    