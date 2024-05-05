import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Импортируем хук навигации

const MyCard = ({ task }) => {
  const { title, description, image } = task;
  const navigation = useNavigation(); // Получаем объект навигации

  const handlePress = () => {
    // Переходим на экран TaskDetailsScreen с параметром task
    navigation.navigate('TaskDetails', { task });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: image }} />
        <Card.Content>
          <Title style={styles.h3}>{title}</Title>
          <Paragraph style={styles.p}>{description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  h3: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  p: {
    color: '#999999',
    fontSize: 13,
  },
});

export default MyCard;
