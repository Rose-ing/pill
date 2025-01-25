import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TimelineBar from './TimelineBar';
import { colors } from '../theme/colors';

export default function MedicineItem({ medicine, onTakeDose }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onTakeDose(medicine.id)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{medicine.name}</Text>
        <Text style={styles.subtitle}>{medicine.dose} • Cada {medicine.frequency}h</Text>
        <TimelineBar doses={medicine.doses} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    padding: 16,
  },
  content: {
    // Add any necessary styles for the content view
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
}); 