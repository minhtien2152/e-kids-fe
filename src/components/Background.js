import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { theme } from "../core/theme";

export default function Background({ children, bg, cnt }) {
  return (
    <View style={bg ? styles.background1 : styles.container0}>{children}</View>
  );
}

const styles = StyleSheet.create({
  background0: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  background1: {
    flex: 1,

    backgroundColor: "#F2F6FC",
  },
  container0: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,

    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
