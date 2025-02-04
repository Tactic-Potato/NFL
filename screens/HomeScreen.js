import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import UserInfo from '../components/UserInfo';

const HomeScreen = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    email: '',
    phone: '',
  });

  // Estado para almacenar los datos enviados
  const [userData, setUserData] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    setUserData(formData); // Guardar los datos en el estado

    // Limpiar el formulario
    setFormData({
      id: '',
      nombre: '',
      email: '',
      phone: '',
    });
  };

  return (
    <View style={styles.container}>
      {/* Logo de la NFL */}
      <Image
        source={require('../assets/nfl-logo.png')} // Ruta de la imagen
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Registro NFL Game Pass</Text>

      {/* Formulario */}
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={formData.id}
        onChangeText={(text) => setFormData({ ...formData, id: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={formData.nombre}
        onChangeText={(text) => setFormData({ ...formData, nombre: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
      />

      {/* Botón personalizado */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      {/* Mostrar los datos del usuario */}
      {userData && <UserInfo userData={userData} />}
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Fondo más transparente
    borderRadius: 10, // Bordes redondeados
    margin: 20, // Margen para separar del borde de la pantalla
  },
  logo: {
    width: 150, // Ancho del logo
    height: 100, // Alto del logo
    alignSelf: 'center', // Centrar el logo
    marginBottom: 20, // Espacio debajo del logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8, // Bordes redondeados
    backgroundColor: 'white', // Fondo blanco
    shadowColor: '#0000ff', // Sombra azul
    shadowOffset: { width: 0, height: 2 }, // Posición de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 4, // Radio de la sombra
    elevation: 3, // Sombra en Android
  },
  button: {
    backgroundColor: 'red', // Fondo rojo
    paddingVertical: 10, // Espacio vertical
    paddingHorizontal: 20, // Espacio horizontal
    borderRadius: 25, // Bordes redondeados
    alignSelf: 'center', // Centrar el botón
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Texto blanco
    fontWeight: 'bold', // Texto en negrita
    fontSize: 16,
  },
});

export default HomeScreen;