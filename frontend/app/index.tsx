import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import SquareComponent from '@/components/SquareComponent';

export default function HomeScreen() {
  const [texto, setTexto] = useState<string>('');

  const last_item = 9 // SACAR 

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Busca Aquì" />
      </View>
      {
        // SACAR ESTO CUANDO SE DEFINA LAS VISTAS
        [...Array(10).keys()].map((_, index) => (
          <SquareComponent key={index}
        style={ (index == last_item) ? {marginBottom: 90} : {} }
          >
            <Text style={styles.text} >Anuncio {index + 1}</Text>
          </SquareComponent>
        ))
      }
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
