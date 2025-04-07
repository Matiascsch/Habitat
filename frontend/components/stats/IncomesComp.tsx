import { COLORS } from "@/constants/Themes";
import { StyleSheet, View, Text } from "react-native";


export default function IncomesComp(){


  return (
    <View style={style.container}>
      <Text style={{color: 'white'}}>HOLA</Text>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: COLORS.background_secondary,
    borderRadius: 20,
    boxShadow: '0 0 8px rgba(0,0,0, 0.9)',
    overflow: 'hidden',
    margin: 5
  }
})