import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
  };

  return (
    <View style={styles.container}>
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

      {/* Botón para enviar el formulario */}
      <Button title="Registrar" onPress={handleSubmit} />

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
    borderRadius: 5,
  },
});

export default HomeScreen;