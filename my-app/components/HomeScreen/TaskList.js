import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, onTaskPress }) => {
  const renderTaskItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTaskPress(item)}>
      <View style={styles.taskContainer}>
        {/* Уберите код, связанный с изображением, если его нет в ваших данных */}
        <Text>{item.description}</Text>
        <Text>Status: {item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskList;
