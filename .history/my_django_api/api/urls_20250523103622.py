from django.urls import path
from .views import (RegisterView, LoginView, LogoutView, UserView,
    ArtistListCreateView, AlbumListCreateView, TrackListCreateView,

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
    path('artists/', ArtistListCreateView.as_view(), name='artist-list-create'),
    path('albums/', AlbumListCreateView.as_view(), name='album-list-create'),
    path('tracks/', TrackListCreateView.as_view(), name='track-list-create'),
]