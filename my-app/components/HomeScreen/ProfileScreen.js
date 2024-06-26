import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getToken, removeToken } from '../../utils/storage';
import SkillsCard from '../../components/HomeScreen/SkillsCard';
import axios from 'axios';
import { URL_API } from '../urls';

const ProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('Username');
  
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(URL_API + "/user/info", {token: token});
        console.log(response.data);
        setUsername(response.data.login);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
    fetchUsername();
  }, []); 

  const handleLogout = () => {
    removeToken();
    navigation.navigate('Start');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardAvatar}>
          {/* Здесь можно использовать иконку профиля или другое изображение */}
          <Text style={styles.avatarText}>A</Text>
        </View>
        <Text style={styles.cardTitle}>{username}</Text>
        <Text style={styles.cardSubtitle}>Rookie garbage collector</Text>
        <View style={styles.profileInfo}>
          {/* <Text style={styles.label}>Username:</Text> */}
          {/* <Text style={styles.text}>{user.username}</Text> */}
        </View>
        <View style={styles.profileInfo}>
          {/* <Text style={styles.label}>Email:</Text> */}
          {/* <Text style={styles.text}>{user.email}</Text> */}
        </View>
        {/* Другие поля профиля... */}

        <SkillsCard Вставляем компонент SkillsCard />
        

        <View style={styles.buttonContainer}>
          <Button title="Edit Profile" onPress={handleEditProfile} />
          <Button title="Logout" onPress={handleLogout} color="#ff0000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingVertical: '20%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  card: {
    width: "110%",
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  cardAvatar: {
    width: 114,
    height: 114,
    backgroundColor: '#ff8475',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 48,
    color: '#fff',
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  cardSubtitle: {
    fontWeight: '400',
    fontSize: 15,
    color: '#78858F',
    marginBottom: 20,
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
    marginTop: "10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ProfileScreen;
