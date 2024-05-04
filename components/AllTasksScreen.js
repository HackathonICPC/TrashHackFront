import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const TaskList = ({ tasks, onTaskPress }) => {
  const renderTaskItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTaskPress(item)}>
      <View style={styles.taskContainer}>
        <Image source={item.image} style={styles.taskImage} />
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

const styles = {
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
};

export default TaskList;
