from rest_framework import serializers
from .models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id_user', 'username', 'email', 'subscription', 'date_joined']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'subscription']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            subscription=validated_data.get('subscription', 'free')
        )
        Token.objects.create(user=user)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'name', 'bio', 'image', 'created_at']

class AlbumSerializer(serializers.ModelSerializer):
    artists = ArtistSerializer(many=True, read_only=True)
    artist_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=Artist.objects.all(), source='artists'
    )

    class Meta:
        model = Album
        fields = ['id', 'title', 'image', 'release_date', 'artists', 'artist_ids', 'created_at']

class TrackSerializer(serializers.ModelSerializer):
    artists = ArtistSerializer(many=True, read_only=True)
    album = serializers.PrimaryKeyRelatedField(queryset=Album.objects.all())
    artist_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=Artist.objects.all(), source='artists'
    )

    class Meta:
        model = Track
        fields = [
            'id', 'title', 'audio_file', 'image', 'duration',
            'release_date', 'artists', 'artist_ids', 'album', 'created_at'
        ]