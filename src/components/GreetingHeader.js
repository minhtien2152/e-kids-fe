import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";
export default function GreetingHeader({ mode, style, ...props }) {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={require("../assets/person/1.png")} />
      <View>
        <Text style={styles.text1}>Hello, John Cena!</Text>
        <Text style={styles.text2}>Hôm nay chúng ta cùng nhau học gì nào?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: getStatusBarHeight() + 30,
    width: "100%",

    position: "relative",
    backgroundColor: theme.colors.surface,

    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flex: 1,
    maxHeight: 190,
    flexDirection: "row",
    paddingRight: 50,
  },
  image: {
    backgroundColor: "#E0E6F3",
    width: 70,
    height: 70,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  text1: {
    fontSize: 24,
    color: "rgba(32,52,67,1)",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 20,
    color: "rgba(32,52,67,1)",

    overflow: "visible",
    paddingRight: 50,
  },
});
