import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Импортируем хук навигации
import { URL_API } from '../urls';
import axios from 'axios';

const MyCard = ({ task }) => {
  const id=task.taskID;
  const title=task.taskTitle;
  const description=task.taskDescrtiption;
  const imageId=task.taskPhoto;
  const navigation = useNavigation(); // Получаем объект навигации

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Функция для выполнения запроса и получения данных изображения
    const fetchImageData = async () => {
      try {
        const response = await axios.get(URL_API + "/images/get/1");
        setImageData(response.data); // Сохраняем данные изображения в состояние
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImageData(); // Вызываем функцию для выполнения запроса при монтировании компонента
  }, []); 


  const handlePress = () => {
    // Переходим на экран TaskDetailsScreen с параметром task
    navigation.navigate('TaskDetails', {taskId : id} );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card style={styles.card}>
        <Card.Cover 
           style={{ width: 200, height: 200 }}
           source={{ uri: `data:image/jpeg;base64,${imageData}` }}
        />
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
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default MyCard;
