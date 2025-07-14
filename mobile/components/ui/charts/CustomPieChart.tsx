import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#121212',
  backgroundGradientFrom: '#121212',
  backgroundGradientTo: '#121212',
  color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
  labelColor: () => '#FFFFFF',
  propsForLabels: {
    fontSize: 12,
  },
};

type PieDataItem = {
  name: string;
  value: number;
  color?: string;
};

interface Props {
  title: string;
  data: PieDataItem[];
  showPercentage?: boolean;
}

const CustomPieChart: React.FC<Props> = ({ title, data, showPercentage = true }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const pieData = data.map((item, index) => {
    const percentage = ((item.value / total) * 100).toFixed(1);
    return {
      name: showPercentage ? `${item.name} (${percentage}%)` : item.name,
      population: item.value,
      color: item.color || defaultColors[index % defaultColors.length],
      legendFontColor: '#FFFFFF',
      legendFontSize: 10,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="16"
        absolute
      />
    </View>
  );
};

const defaultColors = [
  '#FFA500', '#FF8C00', '#FFD700', '#FFB347',
  '#FF7F50', '#E67E22', '#F39C12', '#E74C3C'
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    borderRadius: 16,
    // padding: 16,
    // margin: 16,
    elevation: 4,
  },
  title: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default CustomPieChart;
