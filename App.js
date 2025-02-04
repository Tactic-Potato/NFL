import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/nfl-background.jpg')}
        style={styles.backgroundImage}
        blurRadius={5}
      />

      {/* Contenido de la aplicación */}
      <View style={styles.overlay}>
        <HomeScreen />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});