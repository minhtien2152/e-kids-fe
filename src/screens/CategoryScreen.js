import React, { useEffect } from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Background from "../components/Background";
import GreetingHeader from "../components/GreetingHeader";
import Category from "../components/Category";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Linea,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/core";
import { listWords } from "../actions/wordActions";
const animals = ["Gorilla", "Elephant", "Tiger", "Leopard", "Koala"];
const CategoryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const category = route.params.category ? route.params.category : "";
  const wordList = useSelector((state) => state.wordList);
  const { loading, error, words } = wordList;

  const onPressWord = (id) => {
    navigation.navigate("Word", { word: id });
  };

  useEffect(() => {
    if (category !== "") dispatch(listWords({ category: category }));
  }, []);
  return (
    <Background bg={1} ctn={1}>
      <View>
        <BackButton goBack={navigation.goBack} />
        <ImageBackground
          source={require("../assets/jungle.jpg")}
          style={styles.imgBg}
        >
          <LinearGradient
            colors={[
              "rgba(0,0,0,0.00)",
              "rgba(32,52,67,0.5)",
              "rgba(32,52,67,0.8)",
              "rgba(32,52,67,1)",
            ]}
            style={styles.linearGradient}
          >
            <Image style={styles.img} source={require("../assets/lion.png")} />
            <Text style={styles.text}>Động vật</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          {!loading &&
            words &&
            words.map((word, i) => (
              <TouchableOpacity
                style={styles.word}
                onPress={() => onPressWord(word._id)}
                key={i}
              >
                <Image
                  style={[
                    styles.img2,
                    {
                      transform: [
                        { rotateZ: (90 * (i % 4)).toString() + "deg" },
                      ],
                    },
                  ]}
                  source={require("../assets/puzzle2.png")}
                />
                <Text style={styles.wordText}>{word.name}</Text>
                <Image
                  style={[styles.img3]}
                  source={require("../assets/checked.png")}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "rgba(32,52,67,255)",
  },
  imgBg: {
    width: "100%",
    height: 270,
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  word: {
    height: 80,

    borderBottomColor: "#000",
    borderBottomWidth: 0.2,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    // fontFamily: "Helvetica",
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "uppercase",
  },
  wordText: {
    fontSize: 24,
    color: "#40a9d3",
    fontWeight: "bold",
    // fontFamily: "Helvetica",
    textAlign: "left",
    paddingLeft: 90,
  },
  img: {
    width: 70,
    height: 70,
    color: "#fff",
    marginBottom: 20,
  },
  img2: {
    height: 35,
    width: 35,

    marginLeft: 30,
    position: "absolute",
  },
  img3: {
    position: "absolute",
    right: 25,
    height: 30,
    width: 30,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginBottom: 70,
    borderRadius: 10,
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
});

export default CategoryScreen;
