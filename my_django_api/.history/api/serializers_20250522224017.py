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

class LoadinSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)