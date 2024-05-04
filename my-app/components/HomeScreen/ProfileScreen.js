import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({ navigation }) => {
  const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    // Другие данные профиля...
  };

  const handleLogout = () => {
    AsyncStorage.removeItem("userToken");
    navigation.navigate('Login');
  };
  const handleEditProfile = () => {
    // Переход на экран редактирования профиля
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Username:</Text>
        <Text>{user.username}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text>{user.email}</Text>
      </View>
      {/* Другие поля профиля... */}
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={handleEditProfile} />
        <Button title="Logout" onPress={handleLogout} color="#ff0000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 10,
      color: '#555',
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  });
  

export default ProfileScreen;
