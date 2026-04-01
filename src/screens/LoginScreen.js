import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ onLoginSuccess, onGoToRegister }) {
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (telefono.length === 10 && password.length > 3) {
      onLoginSuccess(telefono); // Pasa al HomeScreen
    } else {
      Alert.alert("Error", "Revisa tus datos (10 dígitos para el teléfono)");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏍️ Cailewey</Text>
      <Text style={styles.subtitle}>Asistencia Vial Biker</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Tu Teléfono" 
        placeholderTextColor="#666"
        keyboardType="numeric"
        onChangeText={setTelefono} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        placeholderTextColor="#666"
        secureTextEntry 
        onChangeText={setPassword} 
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onGoToRegister} style={{ marginTop: 20 }}>
        <Text style={{ color: '#f39c12', textAlign: 'center' }}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#121212' },
  logo: { fontSize: 42, color: '#f39c12', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#888', textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: '#1e1e1e', borderRadius: 12, padding: 18, marginBottom: 15, color: '#fff' },
  button: { backgroundColor: '#f39c12', padding: 20, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});

