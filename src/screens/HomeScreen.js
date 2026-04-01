import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// Importamos la ubicación (necesitarás instalar expo-location después)
import * as Location from 'expo-location';

const API_URL = "https://script.google.com/macros/s/AKfycbzaAPDJVLaFE_4oqXN3KVCl3MXobjf8muCsSw3cJdiGmYEX2DmsV9SYm4tGksjsMduMLw/exec";

export default function HomeScreen({ telefonoUsuario }) {
  
  const solicitarAyuda = async (tipoServicio) => {
    // 1. Pedir permiso de GPS
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Error", "Necesitamos el GPS para encontrarte");
      return;
    }

    // 2. Obtener coordenadas reales
    let location = await Location.getCurrentPositionAsync({});
    const coordenadas = `${location.coords.latitude},${location.coords.longitude}`;
    const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;

    Alert.alert("Solicitando " + tipoServicio, "Enviando tu ubicación exacta...");
    
    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: "solicitar_asistencia",
          telefono: telefonoUsuario,
          tipo: tipoServicio,
          ubicacion: mapaUrl, // Mandamos el link directo a Google Maps
          descripcion: "Biker en apuros"
        }),
      });
      Alert.alert("¡Enviado!", "Tu ubicación ha sido registrada en el sistema.");
    } catch (error) {
      console.log("Error al mandar alerta");
    }
  };

  // ... (el resto de tu diseño de botones se queda igual)
