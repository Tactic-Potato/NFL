import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInfo = ({ userData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID: {userData.id}</Text>
      <Text style={styles.label}>Nombre: {userData.nombre}</Text>
      <Text style={styles.label}>Email: {userData.email}</Text>
      <Text style={styles.label}>Teléfono: {userData.phone}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserInfo;