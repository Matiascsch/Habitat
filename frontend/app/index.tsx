import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import SquareComponent from '@/components/SquareComponent';
import { SHADOWS } from '@/constants/Themes';

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

      <View>
        <Text style={styles.text}>Mis Habitats</Text>
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
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    boxShadow: SHADOWS.small,
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
