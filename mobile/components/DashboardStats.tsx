import BalanceResume from "@/components/ui/charts/BalanceResume";
import MonthlyLineChart from "@/components/ui/charts/LineChart/MonthlyLineChart";
import CustomSelector from "./ui/text/CustomSelector";
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SitemapType } from "expo-router";
import HighlightsCard from "./ui/charts/HighlightsCard";

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