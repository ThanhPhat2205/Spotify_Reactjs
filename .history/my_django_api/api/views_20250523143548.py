from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer, ArtistSerializer, AlbumSerializer, TrackSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Artist, Album, Track


class RegisterView(APIView):
    @swagger_auto_schema(
        request_body=RegisterSerializer,
        responses={
            201: openapi.Response('User created successfully', UserSerializer),
            400: 'Bad Request'
        },
        operation_description="Register a new user and return user data with an authentication token."
    )
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user)
            return Response({
                'user': UserSerializer(user).data,
                'token': token.key
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    @swagger_auto_schema(
        request_body=LoginSerializer,
        responses={
            200: openapi.Response('Login successful', UserSerializer),
            401: 'Unauthorized',
            400: 'Bad Request'
        },
        operation_description="Log in a user and return user data with an authentication token."
    )
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                username=serializer.validated_data['username'],
                password=serializer.validated_data['password']
            )
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({
                    'user': UserSerializer(user).data,
                    'token': token.key
                }, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LogoutView(APIView):
    @swagger_auto_schema(
        operation_description="Log out a user by deleting their authentication token.",
        responses={
            200: openapi.Response('Logout successful'),
            401: 'Unauthorized'
        },
        manual_parameters=[
            openapi.Parameter(
                'Authorization',
                openapi.IN_HEADER,
                description="Token <user_token>",
                type=openapi.TYPE_STRING,
                required=True
            )
        ]
    )
    def post(self, request):
        # Kiểm tra xem người dùng đã xác thực chưa
        if request.user.is_authenticated:
            try:
                # Xóa token của người dùng
                Token.objects.get(user=request.user).delete()
                return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
            except Token.DoesNotExist:
                return Response({'error': 'No token found'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

class UserView(APIView):
    permission_classes = [IsAuthenticated]
    @swagger_auto_schema(
        operation_description="Get details of the authenticated user.",
        responses={
            200: openapi.Response('User details', UserSerializer),
            401: 'Unauthorized'
        },
        manual_parameters=[
            openapi.Parameter(
                'Authorization',
                openapi.IN_HEADER,
                description="Token <user_token>",
                type=openapi.TYPE_STRING,
                required=True
            )
        ]
    )
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ArtistListCreateView(APIView):
    permission_classes = [AllowAny]
    # Adjust as needed
    @swagger_auto_schema(
        responses={200: ArtistSerializer(many=True)},
        operation_description="List all artists"
    )
    def get(self, request):
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        request_body=ArtistSerializer,
        responses={201: ArtistSerializer, 400: 'Bad Request'},
        operation_description="Create a new artist"
    )
    def post(self, request):
        serializer = ArtistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AlbumListCreateView(APIView):
    permission_classes = [AllowAny]
    @swagger_auto_schema(
        responses={200: AlbumSerializer(many=True)},
        operation_description="List all albums"
    )
    def get(self, request):
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        request_body=AlbumSerializer,
        responses={201: AlbumSerializer, 400: 'Bad Request'},
        operation_description="Create a new album"
    )
    def post(self, request):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrackListCreateView(APIView):
    permission_classes = [AllowAny]
    @swagger_auto_schema(
        responses={200: TrackSerializer(many=True)},
        operation_description="List all tracks"
    )
    def get(self, request):
        tracks = Track.objects.all()
        serializer = TrackSerializer(tracks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        request_body=TrackSerializer,
        responses={201: TrackSerializer, 400: 'Bad Request'},
        operation_description="Create a new track"
    )
    def post(self, request):
        serializer = TrackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
