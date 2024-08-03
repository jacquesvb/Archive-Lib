from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, HelloSerializer, MediumSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Medium


class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]


class HelloView(APIView):
  permission_classes = [AllowAny]
  def post(self, request):
    serializer = HelloSerializer(data=request.data)
    if serializer.is_valid():
      name = serializer.validated_data.get("name")
      return Response({"message": f"Hello {name}"}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MediumListCreate(generics.ListCreateAPIView):
  serializer_class = MediumSerializer
  permission_classes = [IsAuthenticated]
  
  def get_queryset(self):
    user = self.request.user
    return Medium.objects.filter(user=user)
  
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save(user=self.request.user)
    else:
      print(serializer.errors)


class MediumDelete(generics.DestroyAPIView):
  serializer_class = MediumSerializer
  permission_classes = [IsAuthenticated]
  
  def get_queryset(self):
    user = self.request.user
    return Medium.objects.filter(user=user)