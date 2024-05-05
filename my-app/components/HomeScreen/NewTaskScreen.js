import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { getToken } from '../../utils/storage';
import { URL_API } from '../urls';

const NewTaskScreen = ({ navigation, route }) => {
  
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [ox, setOX] = useState('');
  const [oy, setOY] = useState('');

  const handleCreateTask = async () => {
    try {

      const userToken = await getToken();

      const response = await axios.post(URL_API+'/task/new', {
        token: userToken,
        taskPhoto : image,
        taskTitle: name, 
        taskDescription: description,
        taskX: ox,
        taskY: oy 
      });
      console.log('Response:', response.data);
      // route.params?.onTaskAdd(response.data);
      console.log('Updated tasks:'); // Чтобы убедиться, что задача была добавлена
      navigation.goBack();
    } catch (error) {
      console.error('Error creating task:', error);
      Alert.alert('Error', 'Failed to create task. Please try again.');
    }
  };

  const handleAddImage = () => {
    // Реализация загрузки изображения
  };

  const handleSelectPlace = () => {
    // Реализация выбора места
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Task Screen</Text>
      <View style={styles.imageContainer}>
        {/* Поле для загрузки изображения */}
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Experience"
          value={experience}
          onChangeText={setExperience}
        />
        <TextInput
          style={styles.input}
          placeholder="OX"
          value={ox}
          onChangeText={setOX}
        />
        <TextInput
          style={styles.input}
          placeholder="OY"
          value={oy}
          onChangeText={setOY}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Image" onPress={handleAddImage} />
        <Button title="Select Place" onPress={handleSelectPlace} />
      </View>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    width: '90%',
    height: 200,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
});

export default NewTaskScreen;
