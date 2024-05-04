import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MyCard from './MyCard';

const TaskList = () => {
  const [data, setData] = useState(Array.from({ length: 20 }, (_, index) => ({ id: index, text: `Item ${index + 1}` })));

  const fetchMoreData = () => {
    // Simulate fetching more data (e.g., from an API)
    const newData = Array.from({ length: 20 }, (_, index) => ({ id: data.length + index, text: `Item ${data.length + index + 1}` }));
    setData([...data, ...newData]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <MyCard title={item.text} description="Description" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchMoreData} // Callback при достижении конца списка
        onEndReachedThreshold={0.1} // Процент точки, когда вызывается onEndReached (например, 0.1 - 10% от конца)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskList;
