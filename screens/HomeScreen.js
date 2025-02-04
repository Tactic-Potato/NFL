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
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    borderRadius: 10, 
    margin: 20,
  },
  logo: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
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
    borderRadius: 8,
    backgroundColor: 'white', 
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 25, 
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;