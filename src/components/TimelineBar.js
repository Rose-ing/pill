import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function TimelineBar({ doses }) {
  // Convierte la hora en un porcentaje del día (0-100)
  const timeToPosition = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / 1440) * 100; // 1440 es el total de minutos en un día
  };

  // Determina el color del indicador según el estado
  const getDoseColor = (dose) => {
    if (dose.taken) {
      return dose.onTime ? colors.success : colors.warning;
    }
    return colors.error;
  };

  return (
    <View style={styles.container}>
      {/* Línea base de 24 horas */}
      <View style={styles.timeline}>
        {/* Marcadores de hora cada 6 horas */}
        {[0, 6, 12, 18, 24].map((hour) => (
          <View 
            key={hour} 
            style={[
              styles.hourMarker,
              { left: `${(hour / 24) * 100}%` }
            ]}
          >
            <Text style={styles.hourText}>{hour}</Text>
          </View>
        ))}

        {/* Indicadores de dosis */}
        {doses.map((dose, index) => (
          <View
            key={index}
            style={[
              styles.doseContainer,
              { left: `${timeToPosition(dose.time)}%` }
            ]}
          >
            <View
              style={[
                styles.doseIndicator,
                { backgroundColor: getDoseColor(dose) }
              ]}
            />
            <Text style={styles.doseTime}>{dose.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginVertical: 8,
    paddingTop: 20,
  },
  timeline: {
    height: 2,
    backgroundColor: colors.text.secondary,
    width: '100%',
    position: 'relative',
  },
  hourMarker: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: colors.text.secondary,
    transform: [{ translateX: -1 }],
  },
  hourText: {
    position: 'absolute',
    top: -20,
    fontSize: 10,
    color: colors.text.secondary,
    transform: [{ translateX: -4 }],
  },
  doseContainer: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{ translateX: -10 }],
  },
  doseIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    top: -10, // Centrado en la línea (-10 es la mitad de la altura del círculo)
    borderWidth: 2,
    borderColor: colors.surface,
    elevation: 3,
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 1, // Asegura que el círculo aparezca sobre la línea
  },
  doseTime: {
    marginTop: 15, // Ajustado para mantener la distancia desde el centro del círculo
    fontSize: 12,
    color: colors.text.primary,
    fontWeight: '500',
  },
}); 