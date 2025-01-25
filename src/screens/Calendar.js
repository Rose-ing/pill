import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Calendar() {
  // Datos de ejemplo para el calendario
  const monthData = {
    '2024-02-01': { status: 'complete', medicines: 3 },    // Verde
    '2024-02-02': { status: 'partial', medicines: 2 },     // Amarillo
    '2024-02-03': { status: 'missed', medicines: 0 },      // Rojo
    // ... más días
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete': return '#4CAF50';
      case 'partial': return '#FFC107';
      case 'missed': return '#F44336';
      default: return '#E0E0E0';
    }
  };

  const renderCalendarDay = (date, data) => {
    const dayColor = data ? getStatusColor(data.status) : '#E0E0E0';
    
    return (
      <TouchableOpacity 
        style={styles.dayContainer}
        onPress={() => console.log(`Seleccionado: ${date}`)}
      >
        <Text style={styles.dayText}>
          {new Date(date).getDate()}
        </Text>
        <View 
          style={[styles.statusDot, { backgroundColor: dayColor }]} 
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.monthTitle}>Febrero 2024</Text>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
            <Text>Completo</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#FFC107' }]} />
            <Text>Parcial</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#F44336' }]} />
            <Text>Perdido</Text>
          </View>
        </View>
      </View>

      <View style={styles.calendar}>
        {/* Aquí iría la implementación del grid del calendario */}
        {Object.entries(monthData).map(([date, data]) => (
          renderCalendarDay(date, data)
        ))}
      </View>

      <TouchableOpacity style={styles.exportButton}>
        <Icon name="file-download" size={24} color="white" />
        <Text style={styles.exportButtonText}>Exportar Reporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  monthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  calendar: {
    flex: 1,
    padding: 16,
  },
  dayContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  dayText: {
    fontSize: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  exportButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 