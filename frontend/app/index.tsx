import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

import SquareComponent from '@/components/SquareComponent';
import { COLORS } from '@/constants/Themes';

export default function HomeScreen() {
  const [texto, setTexto] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Tu mensaje" />
      </View>

      <SquareComponent>
        <Text style={styles.text}>AnuncioAA</Text>
      </SquareComponent>

      <SquareComponent>
        <Text style={styles.text}>AnuncioAA</Text>
      </SquareComponent>

      <SquareComponent>
        <Text style={styles.text}>AnuncioAA</Text>
      </SquareComponent>

      <SquareComponent>
        <Text style={styles.text}>AnuncioAA</Text>
      </SquareComponent>

      <SquareComponent>
        <Text style={styles.text}>AnuncioAA</Text>
      </SquareComponent>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  searchBar: {
    width: '100%',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: "0 3px 5px rgba(0, 0, 0, 1)",
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  text: {
    color: "white"
  }

});
