import { COLORS } from "@/constants/Themes";
import { StyleSheet, Text, View } from "react-native";


export default function ToDoComp(){
  
  
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Task A</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: COLORS.background_secondary,
    borderRadius: 20,
    boxShadow: '0 0 8px rgba(0,0,0, 0.9)',
    overflow: 'hidden',
    margin: 5,
  }
})