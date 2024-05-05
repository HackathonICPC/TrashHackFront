import React, { useRef, useState} from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';
import { ClusteredYamap, Marker } from 'react-native-yamap';
import { getToken } from '../../utils/storage';
import axios from 'axios';
import { URL_API } from '../urls';

import { useFocusEffect } from '@react-navigation/native';

const MapScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [clusteredMarkers, setClusteredMarkers] = useState([]);
  const mapRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      getMarkers();
    }, [])
  );
  const getMarkers = async () => {
    const userToken = await getToken();

    if (!userToken) {
      console.error('User token is missing');
      return;
    }

    axios.post(URL_API + '/task/map', { token: userToken })
      .then(response => {
        console.log(response.data);
        setClusteredMarkers(response.data.map(marker => ({
          point: { lat: marker.taskX, lon: marker.taskY },
          data: { id: marker.taskId, title: marker.taskTitle, description: marker.taskDescription,  lat: marker.taskX, lon: marker.taskY }
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
      <ClusteredYamap
        showUserPosition={false}
        clusterColor="red"
        clusteredMarkers={clusteredMarkers}
        renderMarker={renderMarker}
        style={{ flex: 1 }}
        ref={mapRef}
      >
      </ClusteredYamap>
      {selectedMarker && (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{selectedMarker.title}</Text>
          <Text>{selectedMarker.description}</Text>
          <TouchableOpacity
            style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={() => {
              navigation.navigate('TaskDetails', { task: selectedMarker.id });
            }}
          >
            <Text style={{ color: 'white' }}>Описание рейда</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={() => {
              Linking.openURL(`yandexmaps://maps.yandex.ru/?rtext=~${selectedMarker.lat},${selectedMarker.lon}&rtt=pd`);
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
