import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { URL_API } from '../urls';
import axios from 'axios';

const NewTaskScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    const newTask = { id: "54", title: 'cuMCock' };

    // debug
    console.log('New task:', newTask);
    // debug

    axios.post(URL_API + '/task/new', newTask)
      .then(response => {
        console.log('Task added successfully:', response.data);
        navigation.goBack(); // Переход назад после успешного добавления
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
