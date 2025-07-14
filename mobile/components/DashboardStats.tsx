import BalanceResume from "@/components/ui/cards/BalanceResume";
import MonthlyLineChart from "@/components/ui/charts/MonthlyLineChart";
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HighlightsCard from "./ui/cards/HighlightsCard";
import CustomPieChart from "./ui/charts/CustomPieChart";
import CustomSelector from "./ui/text/CustomSelector";

type Dataset = {
  balanceResume: {
    ingresos: number;
    egresos: number;
  };
  lineChart: {
    gastos: (number | null)[];
  };
};

export default function DashboardStats() {
  const getDatasetInfo = (tipo: string): Dataset => {
    console.log(tipo);

    const res = (tipo == 'gastos') ? {
      balanceResume: {
        ingresos: 5000,
        egresos: 1000
      },
      lineChart: {
        gastos: [1000, 1500, 5000, 4000, 3800, 4500, 6000, null, null, null, null, null],
      }
    } :
      {
        balanceResume: {
          ingresos: 2340,
          egresos: 1230
        },
        lineChart: {
          gastos: [12000, 13500, 15000, 14000, 13800, 14500, 16000, null, null, null, null, null],
        }
      }

    return res;
  }

  const [tipo, setTipo] = useState('gastos');
  const [dataset, setDataset] = useState<Dataset | null>(null);

  useEffect(() => { setDataset(getDatasetInfo(tipo)) }, [tipo]);

  if (!dataset) return null;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.wrapper}>
        <CustomSelector
          value={tipo}
          onChange={setTipo} />

        <BalanceResume
          ingresos={dataset.balanceResume.ingresos}
          egresos={dataset.balanceResume.egresos} />

        <HighlightsCard
          maxIngresoMes="Agosto"
          maxGastoMes="Julio"
          tipoMasGasto="Mantenimiento"
          habitatMasIngreso="Depto 3B"
        />

        <CustomPieChart
          title="Distribución de Gastos"
          data={[
            { name: 'Alquiler', value: 6000 },
            { name: 'Servicios', value: 3000 },
            { name: 'Mantenimiento', value: 2000 },
            { name: 'Expensas', value: 1500 },
          ]}
        />


        <MonthlyLineChart
          data={dataset.lineChart.gastos}
          label="Gastos 2025" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },
  wrapper: {
    padding: 16,
  },
});