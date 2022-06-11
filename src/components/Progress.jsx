import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default ({ color = "#fff", percent = 0.6, children }) => {
  const data = {
    labels: [""],
    data: [percent],
  };
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={80}
        height={80}
        strokeWidth={10}
        radius={29}
        hideLegend
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0, 0, 130, ${0.5})`,
        }}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 80,
    height: 80,
  },
  img: {},
});
