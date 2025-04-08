import { COLORS, SHADOWS } from "@/constants/Themes";
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
    height: 270,
    backgroundColor: COLORS.background_secondary,
    borderRadius: 5,
    boxShadow: SHADOWS.small,
    overflow: 'hidden',
    margin: 5,
    padding: 8
  }
})