import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CategoryListScreen from "../screens/CategoryListScreen";
import CategoryScreen from "../screens/CategoryScreen";
import Rec from "../screens/test";
import WordScreen from "../screens/WordScreen";

const Stack = createStackNavigator();

export function CategoryNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" headerMode="none">
        <Stack.Screen name="Categories" component={CategoryListScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Word" component={WordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
