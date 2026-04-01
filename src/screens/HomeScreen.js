import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const API_URL = "https://script.google.com/macros/s/AKfycbzaAPDJVLaFE_4oqXN3KVCl3MXobjf8muCsSw3cJdiGmYEX2DmsV9SYm4tGksjsMduMLw/exec";

export default function HomeScreen({ telefonoUsuario }) {
  
  const solicitarAyuda = async (tipoServicio) => {
    Alert.alert("Solicitando " + tipoServicio, "Estamos localizando la unidad más cercana...");
    
    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: "solicitar_asistencia",
          telefono: telefonoUsuario,
          tipo: tipoServicio,
          ubicacion: "Tlajomulco Centro", // Aquí luego pondremos el GPS real
          descripcion: "Solicitud desde App Móvil"
        }),
      });
    } catch (error) {
      console.log("Error al mandar alerta");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>¡Qué onda, Biker! 🏍️</Text>
        <Text style={styles.sub}>¿En qué te apoyamos hoy?</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#e74c3c'}]} onPress={() => solicitarAyuda("Grúa")}>
          <Text style={styles.btnIcon}>🚛</Text>
          <Text style={styles.btnText}>Pedir Grúa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#f39c12'}]} onPress={() => solicitarAyuda("Gasolina")}>
          <Text style={styles.btnIcon}>⛽</Text>
          <Text style={styles.btnText}>Me quedé sin gas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#2980b9'}]} onPress={() => solicitarAyuda("Ponchadura")}>
          <Text style={styles.btnIcon}>🛞</Text>
          <Text style={styles.btnText}>Cambio de llanta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#27ae60'}]} onPress={() => solicitarAyuda("Corriente")}>
          <Text style={styles.btnIcon}>🔋</Text>
          <Text style={styles.btnText}>Paso de corriente</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Cailewey Asistencia Vial v1.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 40, alignItems: 'center' },
  welcome: { fontSize: 26, color: '#fff', fontWeight: 'bold' },
  sub: { fontSize: 16, color: '#aaa', marginTop: 5 },
  menu: { padding: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  btn: { 
    width: '46%', 
    height: 150, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20,
    elevation: 5 
  },
  btnIcon: { fontSize: 45, marginBottom: 10 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14, textAlign: 'center' },
  footer: { padding: 20, alignItems: 'center' },
  footerText: { color: '#444', fontSize: 12 }
});

