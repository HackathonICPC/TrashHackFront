import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskList from './TaskList'; // Импортируем компонент TaskList

const tasks = [
  { id: 1, description: 'Task 1', status: 'In progress' },
  { id: 2, description: 'Task 2', status: 'In progress' },
  { id: 3, description: 'Task 3', status: 'In progress' },
  // { id: 2, image: require('../../resourses/rayan2.jpg'), description: 'Task 2', status: 'Waiting' },
  // Другие таски
];

const HomeScreen = ({ navigation }) => {
  const handleTaskPress = (task) => {
    // Навигация на экран таски с передачей параметров
    navigation.navigate('TaskDetails', { task });
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} onTaskPress={handleTaskPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
