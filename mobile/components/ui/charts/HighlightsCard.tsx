import ThemedText from '@/components/ui/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type HighlightsProps = {
  maxIngresoMes: string;
  maxGastoMes: string;
  tipoMasGasto: string;
  habitatMasIngreso: string;
};

const HighlightsCard: React.FC<HighlightsProps> = ({
  maxIngresoMes,
  maxGastoMes,
  tipoMasGasto,
  habitatMasIngreso,
}) => {
  const highlights = [
    {
      icon: 'cash-outline',
      label: 'Mes con más ingresos',
      value: maxIngresoMes,
    },
    {
      icon: 'trending-down-outline',
      label: 'Mes con más gastos',
      value: maxGastoMes,
    },
    {
      icon: 'pricetag-outline',
      label: 'Tipo con más gastos',
      value: tipoMasGasto,
    },
    {
      icon: 'home-outline',
      label: 'Hábitat con más ingresos',
      value: habitatMasIngreso,
    },
  ];

  return (
    <View style={styles.grid}>
      {highlights.map((item, index) => (
        <View key={index} style={styles.card}>
          <Ionicons name={item.icon as any} size={28} color="#FFA500" style={styles.icon} />
          <ThemedText type='caption' style={styles.label}>{item.label}</ThemedText>
          <ThemedText type='caption' style={styles.value}>{item.value}</ThemedText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#1E1E1E',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center'
  },
  value: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HighlightsCard;
