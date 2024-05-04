import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Домашняя страница</Text>
      {/* <Button
        title="Перейти к регистрацииs/авторизации"
        onPress={() => navigation.navigate('Auth')}
      /> */}
    </View>
  );
};

export default HomeScreen;