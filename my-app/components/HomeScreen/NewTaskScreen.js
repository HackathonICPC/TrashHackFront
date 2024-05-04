import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NewTaskScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    const newTask = { id: Math.random().toString(), description, status: 'In progress' };
    console.log('New task:', newTask);
    route.params?.onTaskAdd(newTask);
    console.log('Updated tasks:'); // Чтобы убедиться, что задача была добавлена
    navigation.goBack();
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
