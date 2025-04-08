import { COLORS } from "@/constants/Themes";
import { StyleSheet, Text, View } from "react-native";



export default function BasicIncomeComp() {

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.text_container}>
          <Text style={style.text}>Ùltimo mes</Text>
          <Text style={style.percent}>(2,4%)▼</Text>
        </View>
        <Text style={style.number}>$10.000.000,00</Text>
      </View>

      <View style={style.content}>
      <View style={style.text_container}>
          <Text style={style.text}>Balance</Text>
          <Text style={style.percent}>(0,4%)▲</Text>
        </View>
        <Text style={style.number}>$10.000.000,00</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    margin: 5,
    alignItems: "center"
  },
  content: {
    width: "49%",
    paddingTop: 16,
    padding: 8,
    backgroundColor: COLORS.background_secondary,
    borderRadius: 5,
    boxShadow: '0 0 4px rgba(0,0,0, 0.9)',
  },
  text_container: {
    gap: 2,
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    fontWeight: "200",
    color: "white"
  },
  percent: {
    color: "lightgreen",
    fontWeight: 500,
    marginStart: 5,
    fontSize: 12,
  },
  number: {
    fontSize: 22,
    fontWeight: "400",
    color: "lightgreen"
  },
})