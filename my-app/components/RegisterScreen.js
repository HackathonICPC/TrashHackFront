import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { URL_API } from './urls';
import { setToken, getToken } from '../utils/storage';

import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = () => {
    const requestData = {
        "login": username,
        "password": password
      };

      // debug START
      console.log();
      // degug END

      axios.post(URL_API + "/auth/register", requestData)
        .then(response => {
            const data = response.data; 
            console.log(URL_API + "/auth/register")
            
            if (response.status === 200 && response.data.length > 0 && response.data.length < 300) {
                console.log('Register successful. Token:', response.data);
                
                setToken(response.data);
                
                navigation.navigate('HomeMenu'); 
            } else if (response.status === 401) {
                console.error('Invalid credentials (code ' + response.status + ')');
            }
            else {
                console.error('Critical server error (code ' + response.status + ')');
            }
            })
        .catch(error => {
            console.error('Register error:', error);
        });
  };

  const handleRegistration = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.link} onPress={handleRegistration}>У меня нет аккаунта, переведи меня на логин</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
