import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Yamap, Marker } from 'react-native-yamap'; 
import { getToken } from '../../utils/storage';
import axios from 'axios';
import { URL_API } from '../urls';
import * as Location from 'expo-location';

import { useFocusEffect } from '@react-navigation/native';

const MapScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const mapRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      getMarkers();
      getUserLocation();
      if (userLocation) {
        setInitialRegion({
          latitude: userLocation.lat,
          longitude: userLocation.lon,
          zoom:10,
          azimuth:90,
          tilt:100
        });
      }
    }, [])
  );

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setUserLocation({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    });
  };

  const getMarkers = async () => {
    const userToken = await getToken();

    if (!userToken) {
      console.error('User token is missing');
      return;
    }

    axios.post(URL_API + '/task/map', { token: userToken })
      .then(response => {
        console.log(response.data);
        setMarkers(response.data.map(marker => ({
          point: { lat: marker.lat, lon: marker.lon },
          data: { id: marker.id, title: `Marker ${marker.id}`, description: `Description of Marker ${marker.id}` }
        })));
      })
      .catch(error => {
        console.error('Error fetching markers:', error);
      });
  };

  const handleMarkerPress = (markerData) => {
    setSelectedMarker(markerData);
  };

  const renderMarker = (info, index) => (
    <Marker
      key={info.data.id}
      point={info.point}
      onPress={() => handleMarkerPress(info.data)}
      image={require('../../resourses/nav-button.png')}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Yamap // Заменяем ClusteredYamap на Yamap
        showUserPosition={false}
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={initialRegion}
      >
        {userLocation && (
          <Marker
            point={userLocation}
            onPress={() => setSelectedMarker({ title: 'Your Location', description: 'This is your current location' })}
          />
        )}
        {markers.map((marker, index) => ( // Отображаем маркеры из массива markers
          <Marker
            key={index}
            point={marker.point}
            onPress={() => handleMarkerPress(marker.data)}
            image={require('../../resourses/nav-button.png')}
          />
        ))}
      </Yamap>

      {selectedMarker && (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{selectedMarker.title}</Text>
          <Text>{selectedMarker.description}</Text>
          <TouchableOpacity
            style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={() => {
              navigation.navigate('TaskDetails', { task: selectedMarker });
            }}
          >
            <Text style={{ color: 'white' }}>Описание рейда</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={() => {
              navigation.navigate('TaskDetails', { task: selectedMarker });
            }}
          >
            <Text style={{ color: 'white' }}>Построить маршрут</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MapScreen;
