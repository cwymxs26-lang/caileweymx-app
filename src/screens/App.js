import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen'; // Si lo dejaste en la raíz
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <LoginScreen onLoginSuccess={() => console.log('Entró')} />
      ) : (
        <RegisterScreen />
      )}
      
      {/* Botón temporal para que tú pruebes las dos pantallas */}
      <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
        <button onClick={() => setIsLogin(!isLogin)} style={styles.debugButton}>
          {isLogin ? "Ir a Registro" : "Ir a Login"}
        </button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  debugButton: { padding: 10, backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: 5 }
});

