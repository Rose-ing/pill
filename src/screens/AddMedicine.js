import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function AddMedicine({ navigation }) {
  const [medicine, setMedicine] = useState({
    name: '',
    dose: '',
    frequency: '',
    startDate: new Date(),
    endDate: new Date(),
    notes: '',
  });

  const handleSave = () => {
    // Aquí implementaremos la lógica para guardar el medicamento
    console.log('Guardando medicina:', medicine);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre del medicamento</Text>
        <TextInput
          style={styles.input}
          value={medicine.name}
          onChangeText={(text) => setMedicine({ ...medicine, name: text })}
          placeholder="Ej: Paracetamol"
        />

        <Text style={styles.label}>Dosis</Text>
        <TextInput
          style={styles.input}
          value={medicine.dose}
          onChangeText={(text) => setMedicine({ ...medicine, dose: text })}
          placeholder="Ej: 500mg"
        />

        <Text style={styles.label}>Frecuencia (horas)</Text>
        <TextInput
          style={styles.input}
          value={medicine.frequency}
          onChangeText={(text) => setMedicine({ ...medicine, frequency: text })}
          placeholder="Ej: 8"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Notas adicionales</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={medicine.notes}
          onChangeText={(text) => setMedicine({ ...medicine, notes: text })}
          placeholder="Ej: Tomar con comida"
          multiline
          numberOfLines={4}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={[styles.buttonText, styles.saveButtonText]}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  saveButtonText: {
    color: 'white',
  },
});

// Reemplazar el DateTimePicker por un input tipo date normal para web
const DateInput = ({ value, onChange, label }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(new Date(e.target.value))}
      style={{
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%'
      }}
    />
  </View>
); 