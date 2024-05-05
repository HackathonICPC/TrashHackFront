import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Импортируем ImagePicker из Expo
import axios from 'axios';
import { getToken } from '../../utils/storage';
import { URL_API } from '../urls';
import * as Location from 'expo-location';

const NewTaskScreen = ({ navigation, route }) => {
  
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [ox, setOX] = useState('');
  const [oy, setOY] = useState('');

  useEffect(() => {
    (async () => {
      // Запрашиваем разрешение на использование галереи
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleCreateTask = async () => {
    try {
      const userToken = await getToken();

      console.log({
        token: userToken,
        taskPhoto : image,
        taskTitle: name,
        taskDescription: description,
        taskExperiencePoints: parseInt(experience),
        taskX: parseFloat(ox),
        taskY: parseFloat(oy)
      });
      const response = await axios.post(URL_API+'/task/new', {
        token: userToken,
        taskPhoto : image,
        taskTitle: name, 
        taskDescription: description,
        taskExperiencePoints: parseInt(experience),
        taskX: parseFloat(ox),
        taskY: parseFloat(oy)
      });

      console.log('Response:', response.data);
      console.log('Updated tasks:'); // Чтобы убедиться, что задача была добавлена
      navigation.goBack();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleAddImage = async () => {
    // Открываем галерею для выбора изображения
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('result', result);

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      console.log('resul.uri', imageUri);
      setImage(imageUri);
      console.log('image:', image);

        // Создаем FormData для отправки изображения
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg', // Измените тип в соответствии с вашими требованиями
        name: 'photo.jpg', // Название файла
      });

      // Чтение файла из хранилища устройства и конвертация в массив байтов
      let imageFile = await fetch(imageUri);
      let imageBlob = await imageFile.blob();
      let byteArray = await new Uint8Array(await imageBlob.arrayBuffer());

      console.log('byteArray', byteArray);
      // Отправка массива байтов на бэкенд

      try {
        // Отправляем изображение на бэкенд
        // const response = await axios.post(URL_API+'/images/upload', imageUri);
        const response = await axios.post('URL_API/upload/photo', byteArray);
        
        console.log('byteArray', byteArray);
        console.log('result of response', response);

        // Получаем ключ id изображения из ответа бэкенда
        const imageId = response.data.imageId;
        console.log('response:', response);
        console.log('response.data', response.data);
        console.log('Image ID:', imageId);

        setImage(imegeId);
        console.log('поле image теперь равно:', image);

        console.log(' ');

        // Записываем ключ id в state или отправляем на бэкенд как параметр taskPhoto
        // setImageId(imageId);
        // setTaskPhoto(imageId);
        // В вашем случае, учитывая ваши useState, можно использовать setImage(imageId);

      } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to upload image. Please try again.');
      }
    } else {
      console.log('result cancelled!');
    }
  };

  

  const handleSelectPlace = () => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setOX(location.coords.latitude.toString())
      setOY(location.coords.longitude.toString())
    };
    getUserLocation();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Task Screen</Text>
      <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
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
          keyboardType="numeric"
          value={experience}
          onChangeText={setExperience}
        />
        <TextInput
          style={styles.input}
          placeholder="OX"
          value={ox}
          keyboardType="numeric"
          onChangeText={setOX}
        />
        <TextInput
          style={styles.input}
          placeholder="OY"
          value={oy}
          keyboardType="numeric"
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



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { getToken } from '../../utils/storage';
// import { URL_API } from '../urls';

// const NewTaskScreen = ({ navigation, route }) => {
  
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [experience, setExperience] = useState('');
//   const [ox, setOX] = useState('');
//   const [oy, setOY] = useState('');

//   const handleCreateTask = async () => {
//     try {

//       const userToken = await getToken();

//       const body = {
//         token: userToken,
//         taskPhoto : image,
//         taskTitle: name, 
//         taskDescription: description,
//         taskX: ox,
//         taskY: oy 
//       };

//       console.log('body: ', body);

//       const response = await axios.post(URL_API+'/task/new', body);
//       console.log('Response:', response.data);
//       // route.params?.onTaskAdd(response.data);
//       console.log('Updated tasks:'); // Чтобы убедиться, что задача была добавлена
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error creating task:', error);
//       Alert.alert('Error', 'Failed to create task. Please try again.');
//     }
//   };

//   const handleAddImage = () => {
//     // Реализация загрузки изображения
//   };

//   const handleSelectPlace = () => {
//     // Реализация выбора места
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>New Task Screen</Text>
//       <View style={styles.imageContainer}>
//         {/* Поле для загрузки изображения */}
//       </View>
//       <View style={styles.card}>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Experience"
//           value={experience}
//           onChangeText={setExperience}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="OX"
//           value={ox}
//           onChangeText={setOX}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="OY"
//           value={oy}
//           onChangeText={setOY}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="Add Image" onPress={handleAddImage} />
//         <Button title="Select Place" onPress={handleSelectPlace} />
//       </View>
//       <Button title="Create Task" onPress={handleCreateTask} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   imageContainer: {
//     width: '90%',
//     height: 200,
//     backgroundColor: '#ddd',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   card: {
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginBottom: 20,
//   },
// });

// export default NewTaskScreen;
