import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ClusteredYamap, Marker } from 'react-native-yamap';
import { getToken } from '../../utils/storage';
import axios from 'axios';
import { URL_API } from '../urls';

const MapScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [clusteredMarkers, setClusteredMarkers] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    getMarkers();
  }, []);

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
      key={info.da}
      point={info.point}
      onPress={() => handleMarkerPress(info.data)}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <ClusteredYamap
        clusterColor="red"
        clusteredMarkers={clusteredMarkers}
        renderMarker={renderMarker}
        style={{ flex: 1 }}
        ref={mapRef}
      />
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
            <Text style={{ color: 'white' }}>View Details</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MapScreen;
