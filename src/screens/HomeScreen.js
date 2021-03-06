import React from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Background from "../components/Background";
import GreetingHeader from "../components/GreetingHeader";
import Category from "../components/Category";
import Progress from "../components/Progress";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
} from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <Background bg={1} ctn={1}>
      <ImageBackground style={styles.bg} source={require("../assets/sky.jpg")}>
        <GreetingHeader />
        <View style={styles.content}>
          <Text style={styles.text}>Gợi ý cho ngày hôm nay</Text>
          <Category>
            <Progress percent={0.4}>
              <Image style={styles.img} source={require("../assets/car.png")} />
            </Progress>
            <Text style={styles.text2}>Phương tiện</Text>
          </Category>
          <Text style={styles.text}>Tiếp tục các bài học của bạn</Text>
          <ScrollView showsHorizontalScrollIndicator>
            <Category>
              <Progress percent={0.2}>
                <Image
                  style={styles.img}
                  source={require("../assets/fork.png")}
                />
              </Progress>
              <Text style={styles.text2}>Vật dụng nhà bếp</Text>
            </Category>
            <Category>
              <Progress percent={0.5}>
                <Image
                  style={styles.img}
                  source={require("../assets/bird.png")}
                />
              </Progress>
              <Text style={styles.text2}>Các loại chim</Text>
            </Category>
            <Category>
              <Progress percent={0.8}>
                <Image
                  style={styles.img}
                  source={require("../assets/car.png")}
                />
              </Progress>
              <Text style={styles.text2}>Phương tiện</Text>
            </Category>
            <Category>
              <Progress>
                <Image
                  style={styles.img}
                  source={require("../assets/lion.png")}
                />
              </Progress>
              <Text style={styles.text2}>Động vật</Text>
            </Category>
          </ScrollView>
        </View>
      </ImageBackground>
    </Background>
  );
};
const colorPallette = [
  "#f3a683",
  "#f7d794",
  "#778beb",
  "#e77f67",
  "#cf6a87",
  "#f19066",
  "#f5cd79",
  "#546de5",
  "#e15f41",
  "#c44569",
  "#786fa6",
  "#f8a5c2",
  "#63cdda",
  "#ea8685",
  "#596275",
  "#574b90",
  "#f78fb3",
  "#3dc1d3",
  "#e66767",
  "#303952",
];
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  text: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  text2: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginLeft: 16,
  },
  cat: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    left: 15,
    top: 15,
    width: 50,
    height: 50,

    borderRadius: 100,
    backgroundColor: colorPallette[Math.floor(Math.random() * 10)].toString(),
  },
});

export default HomeScreen;
