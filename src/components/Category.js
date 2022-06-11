import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

export default function Category({ type, children, color, press }) {
  const styles = StyleSheet.create({
    base: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      width: "100%",
      height: 100,
      alignSelf: "center",
      overflow: "hidden",
      marginBottom: 18,
      paddingHorizontal: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    second: {
      width: "100%",
      backgroundColor: color,
      height: 130,
      alignSelf: "center",

      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <TouchableOpacity
      style={type ? styles.second : styles.base}
      onPress={press}
    >
      {children}
    </TouchableOpacity>
  );
}
