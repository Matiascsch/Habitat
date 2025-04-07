import { View, Image, StyleSheet } from "react-native";

// Imagenes Importadas
import LogoHabitat from "@/assets/images/LogoHabitat2.png"

// Importar constantes
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderComp() {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <View style={[style.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={{paddingLeft: 10}}>
        <Image source={LogoHabitat} style={{width: 75, height: 75}}/>
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    height: 90,
    boxShadow: "0 3px 8px rgba(0, 0, 0, 1)",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})