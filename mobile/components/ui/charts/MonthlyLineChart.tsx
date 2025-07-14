import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

interface Props {
  data: number[]; // 12 valores
  label?: string;
  color?: string;
}

export default function MonthlyLineChart({ data, label='Gastos mensuales', color='#FFA500' }: Props) {
  const numbers = data.filter(element => element != null);
  const final_months = months.slice(0, numbers.length);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      
      <LineChart
        data={{
          labels: final_months,
          datasets: [
            {
              data: numbers,
              color: (opacity = 1) => `${color}`, // color de línea
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth * 0.9}
        height={220}
        yAxisLabel="$"
        withShadow={false}
        withInnerLines={true}
        withOuterLines={false}
        bezier
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#1E1E1E',
          backgroundGradientTo: '#1E1E1E',
          decimalPlaces: 0,
          color: () => color,
          labelColor: () => '#ccc',
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#000',
          },
          propsForBackgroundLines: {
            stroke: '#444',              // color de línea
            strokeDasharray: '4',        // línea punteada
            strokeWidth: 1,
          },
        }}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    marginVertical: 20,
    elevation: 4,
  },
  title: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  chart: {
    marginTop: 10,
    borderRadius: 12,
    width: '100%'
  },
});
