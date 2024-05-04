import AsyncStorage from '@react-native-async-storage/async-storage';
 
    export const setToken = async (userToken) => {
      try {
        await AsyncStorage.setItem('userToken', userToken);
        console.log('Token stored successfully');
      } catch (error) {
        console.log('Failed to save the token');
      }
    }
  
    export const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Retrieved token:', token);
        return token;
      } catch (error) {
        console.log('Failed to fetch the token');
        return null;
      }
    }

    export const removeToken = async () => {
      try {
        const token = await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log('Failed to fetch the token');
      }
    }

    export const checkToken = async () => {
      try {
        const token = await getToken();
        console.log(token != null)
        return token != null;
      } catch (error) {
        console.log('Failed to fetch the token');
      }
    }
  