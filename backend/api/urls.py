from django.urls import path
from . import views

urlpatterns = [
  path("hello/", views.HelloView.as_view(), name="hello"),
  path("medium/", views.MediumListCreate.as_view(), name="medium-list-create"),
  path("medium/delete/<int:pk>/", views.MediumDelete.as_view(), name="medium-delete"),
]
