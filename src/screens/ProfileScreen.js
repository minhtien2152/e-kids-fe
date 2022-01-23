import React from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Background from "../components/Background";
import GreetingHeader from "../components/GreetingHeader";
import Category from "../components/Category";
import { StyleSheet, View, ScrollView } from "react-native";
const ProfileScreen = ({ navigation }) => {
  return (
    <Background bg={1} ctn={1}>
      <Header>Profile</Header>
    </Background>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
    flex: 1,
    alignContent: "center",
  },
});

export default ProfileScreen;
