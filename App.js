import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Imagen de fondo desenfocada */}
      <Image
        source={require('./assets/nfl-background.jpg')} // Ruta de la imagen
        style={styles.backgroundImage}
        blurRadius={5} // Aplicar desenfoque
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
    resizeMode: 'cover', // Cubrir toda la pantalla
    position: 'absolute', // Posicionar detrás del contenido
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Fondo más transparente
  },
});