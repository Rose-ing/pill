import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MedicineItem from '../components/MedicineItem';
import { colors } from '../theme/colors';

export default function Dashboard({ navigation }) {
  // Datos de ejemplo - después los moveremos a un estado global o base de datos
  const [medicines] = useState([
    {
      id: 1,
      name: 'Paracetamol',
      dose: '500mg',
      frequency: 8,
      doses: [
        { time: '08:00', taken: true, onTime: true },
        { time: '16:00', taken: true, onTime: false },
        { time: '00:00', taken: false, onTime: false },
      ],
    },
    {
      id: 2,
      name: 'Ibuprofeno',
      dose: '400mg',
      frequency: 12,
      doses: [
        { time: '09:00', taken: true, onTime: true },
        { time: '21:00', taken: false, onTime: false },
      ],
    },
  ]);

  const handleTakeDose = (medicineId) => {
    // Aquí implementaremos la lógica para marcar una dosis como tomada
    console.log('Medicina tomada:', medicineId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Medicamentos</Text>
        <Text style={styles.subtitle}>
          Progreso de hoy: 3/5 dosis tomadas
        </Text>
      </View>

      <ScrollView style={styles.medicineList}>
        {medicines.map((medicine) => (
          <MedicineItem
            key={medicine.id}
            medicine={medicine}
            onTakeDose={handleTakeDose}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddMedicine')}
      >
        <Icon name="add" size={24} color={colors.text.inverse} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  medicineList: {
    flex: 1,
    padding: 16,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
}); 