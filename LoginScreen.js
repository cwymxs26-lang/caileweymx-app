import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const API_URL = "https://script.google.com/macros/s/AKfycbzaAPDJVLaFE_4oqXN3KVCl3MXobjf8muCsSw3cJdiGmYEX2DmsV9SYm4tGksjsMduMLw/exec";

export default function LoginScreen({ onLoginSuccess }) {
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!telefono || !password) {
      Alert.alert("Error", "Ingresa tu teléfono y contraseña");
      return;
    }

    // Aquí llamaríamos a una función de validación en tu Google Sheet
    // Por ahora, simularemos el acceso para que puedas avanzar
    Alert.alert("Bienvenido", "Iniciando sesión en Cailewey...");
    onLoginSuccess(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏍️ Cailewey</Text>
      <Text style={styles.subtitle}>Asistencia Vial</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Teléfono Celular" 
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        onChangeText={setTelefono} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        placeholderTextColor="#aaa"
        secureTextEntry 
        onChangeText={setPassword} 
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#121212' },
  logo: { fontSize: 40, color: '#f39c12', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#fff', textAlign: 'center', marginBottom: 40 },
  input: { 
    backgroundColor: '#1e1e1e', 
    borderRadius: 12, 
    padding: 18, 
    marginBottom: 20, 
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333'
  },
  button: { backgroundColor: '#f39c12', padding: 20, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});

