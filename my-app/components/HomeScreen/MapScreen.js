// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import {YaMap, Marker} from 'react-native-yamap';

// const MapScreen = () => {
//   // Данные для меток на карте
//   const markers = [
//     { coordinate: { latitude: 55.7558, longitude: 37.6176 }, title: 'Москва', description: 'Столица России' },
//     { coordinate: { latitude: 59.9343, longitude: 30.3351 }, title: 'Санкт-Петербург', description: 'Северная столица России' },
//   ];    

//   const handleMarkerPress = (event) => {
//     console.log('Marker pressed:', event);
//   };

//   return (
//     <View style={styles.container}>
//         <YaMap
//             userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
//             initialRegion={{
//                 lat: 50,
//                 lon: 50,
//                 zoom: 10,
//                 azimuth: 80,
//                 tilt: 100
//             }}
//             style={{ flex: 1 }}
//         />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;
