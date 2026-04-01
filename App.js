import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  // Estados para controlar qué pantalla ver
  const [userToken, setUserToken] = useState(null); // null = No logueado
  const [isRegistering, setIsRegistering] = useState(false);

  // Función para cuando el login es exitoso
  const handleLogin = (telefono) => {
    setUserToken(telefono);
  };

  return (
    <View style={styles.container}>
      {userToken ? (
        // Si ya entró, mostramos el menú de grúas/asistencia
        <HomeScreen telefonoUsuario={userToken} />
      ) : isRegistering ? (
        // Si picó en registrarse
        <RegisterScreen onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        // Pantalla de entrada por defecto
        <LoginScreen 
          onLoginSuccess={handleLogin} 
          onGoToRegister={() => setIsRegistering(true)} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
});
