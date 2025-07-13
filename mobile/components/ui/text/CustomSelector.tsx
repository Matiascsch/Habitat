import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const options = [
  { label: 'Gastos', value: 'gastos' },
  { label: 'Ingresos', value: 'ingresos' },
  { label: 'Ahorro', value: 'ahorro' },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomSelector({ value, onChange }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const getText = () => {
    switch (value) {
      case 'gastos':
        return 'Estás viendo tus gastos del mes.';
      case 'ingresos':
        return 'Estás viendo tus ingresos estimados.';
      case 'ahorro':
        return 'Este es tu ahorro acumulado.';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seleccionar opción</Text>

      <Pressable style={styles.selectBox} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectText}>
          {options.find((opt) => opt.value === value)?.label}
        </Text>
      </Pressable>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => {
                  onChange(option.value);
                  setModalVisible(false);
                }}
                style={styles.optionItem}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      <Text style={styles.output}>{getText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
  },
  label: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectBox: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 10,
    padding: 12,
  },
  selectText: {
    color: '#fff',
    fontSize: 16,
  },
  output: {
    color: '#ccc',
    marginTop: 20,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 32,
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingVertical: 10,
  },
  optionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});
