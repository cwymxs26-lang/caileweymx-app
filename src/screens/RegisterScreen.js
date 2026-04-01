import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const API_URL = "https://script.google.com/macros/s/AKfycbzaAPDJVLaFE_4oqXN3KVCl3MXobjf8muCsSw3cJdiGmYEX2DmsV9SYm4tGksjsMduMLw/exec";

export default function RegisterScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [moto, setMoto] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!nombre || !telefono || !moto || !password) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }

    try {
      // Enviamos los datos a tu Google Sheet
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: "registrar",
          nombre,
          telefono,
          moto,
          password
        }),
      });

      Alert.alert("¡Éxito!", "Te has registrado en Cailewey");
      // Aquí podrías mandar al usuario al Home
    } catch (error) {
      Alert.alert("Error", "No pudimos conectarnos al servidor");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Cailewey</Text>
      
      <TextInput style={styles.input} placeholder="Nombre completo" onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Teléfono (10 dígitos)" keyboardType="numeric" onChangeText={setTelefono} />
      <TextInput style={styles.input} placeholder="Modelo de tu Moto" onChangeText={setMoto} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>UNIRME AHORA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#1a1a1a' },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: { 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 15, 
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  button: { backgroundColor: '#f39c12', padding: 18, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

