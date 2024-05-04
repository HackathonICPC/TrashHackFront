import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { URL_API } from '../urls';
import axios from 'axios';
import { getToken } from '../../utils/storage'; // Импортируем функцию для получения токена

const NewTaskScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');

  const handleCreateTask = async () => {
    const userToken = await getToken(); // Получаем токен из AsyncStorage

    if (!userToken) {
      console.error('User token is missing');
      return;
    }

    const newTask = { token: userToken, title: description, description: description, experience: 1, lat: 1, lon: 1 }; // Передаем только описание задачи

    axios.post(URL_API + '/task/new', newTask)
      .then(response => {
        console.log('URL:', URL_API + '/task/new');
        console.log('New Task:', newTask);
        console.log('Task added successfully:', response.data);
        console.log('Result status', response.status)
        // navigation.goBack(); // Переход назад после успешного добавления
      })
      .catch(error => {
        console.error('Error adding task:', error);
        // Добавьте обработку ошибки при добавлении задачи
      });
  };

  return (
    <View style={styles.container}>
      <Text>New Task Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default NewTaskScreen;
