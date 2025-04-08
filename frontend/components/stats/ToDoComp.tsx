import { COLORS, SHADOWS } from "@/constants/Themes";
import { StyleSheet, Text, View } from "react-native";


export default function ToDoComp(){
  
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.task}>Cambio de Lavavajillas</Text>
        <Text style={styles.habitat}>Fecha: 30/02/2025</Text>
        <Text style={styles.habitat}>Main Park</Text>
        <Text style={styles.inmueble}>3H Etapa 2</Text>
      </View>

      <Text style={styles.price}>-$350.00</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "auto",
    backgroundColor: COLORS.background_secondary,
    borderRadius: 5,
    boxShadow: SHADOWS.small,
    overflow: 'hidden',
    margin: 5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  task: {
    fontSize: 16,
    color: "white",
  },
  habitat: {
    fontSize: 10,
    color: "white",
    fontWeight: 200
  },
  inmueble: {
    fontSize: 10,
    color: "white",
    fontWeight: 200
  },
  price: {
    fontSize: 20,
    color: "#FF474C",
    fontWeight: 400,
  },
})