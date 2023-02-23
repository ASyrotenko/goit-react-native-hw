import { StyleSheet, View, TouchableOpacity } from "react-native";

import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 50.51633,
            longitude: 30.602185,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: 50.51633, longitude: 30.602185 }} />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
    top: -34,
    zIndex: 1,
  },
});
