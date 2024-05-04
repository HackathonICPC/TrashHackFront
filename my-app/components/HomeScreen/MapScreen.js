import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ClusteredYamap, Marker } from 'react-native-yamap';

const MapScreen = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  const clusteredMarkers = [
    {
      point: {
        lat: 56.754215,
        lon: 38.622504,
      },
      data: { id: 1, title: 'Marker 1', description: 'Description of Marker 1' },
    },
    {
      point: {
        lat: 56.754215,
        lon: 38.222504,
      },
      data: { id: 2, title: 'Marker 2', description: 'Description of Marker 2' },
    },
    // Add more markers here...
  ];

  const handleMarkerPress = (markerData) => {
    setSelectedMarker(markerData);
    // Navigate to marker detail screen
    // You can use navigation library like React Navigation here
  };

  const renderMarker = (info, index) => (
    <Marker
      key={index}
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
              // Handle navigation to marker detail screen
              // You can use navigation library like React Navigation here
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
