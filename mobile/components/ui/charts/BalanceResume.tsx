import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  ingresos: number;
  egresos: number;
}

export default function BalanceResume({ ingresos, egresos }: Props) {
  const balance = ingresos - egresos;
  const balanceColor = balance >= 0 ? '#4CAF50' : '#F44336'; // verde o rojo

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen del Mes</Text>

      <View style={styles.rowSplit}>
        <View style={styles.box}>
          <Ionicons name="trending-up" size={24} color="#4CAF50" />
          <Text style={styles.label}>Ingresos</Text>
          <Text style={[styles.value, { color: '#4CAF50' }]}>
            ${ingresos.toLocaleString()}
          </Text>
        </View>

        <View style={styles.box}>
          <Ionicons name="trending-down" size={24} color="#F44336" />
          <Text style={styles.label}>Egresos</Text>
          <Text style={[styles.value, { color: '#F44336' }]}>
            ${egresos.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.balanceBox}>
        <Ionicons name="cash-outline" size={24} color={balanceColor} />
        <Text style={styles.label}>Balance</Text>
        <Text style={[styles.value, { color: balanceColor }]}>
          ${balance.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginVertical: 16,
    elevation: 4,
  },
  title: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  rowSplit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 14
  },
  box: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  balanceBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 6,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
});
