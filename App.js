import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Color oscuro para combinar con Cailewey
  },
});

