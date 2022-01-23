import React, { useEffect, useState } from "react";
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
  RefreshControl,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/categoryActions";
import { BACKEND } from "../../define";
import { useNavigation, useRoute } from "@react-navigation/native";

const CategoryListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [initialLoad, setInitiaLoad] = useState(false);
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    dispatch(listCategories());
  }, []);
  useEffect(() => {
    setInitiaLoad(true);
    dispatch(listCategories());
  }, []);

  const onClickCategory = (id) => {
    navigation.navigate("Category", { category: id });
  };
  return (
    <Background bg={1} ctn={1}>
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {initialLoad &&
          categories &&
          categories.map((cat, i) => (
            <Category
              type={1}
              color={shuffle(colorPallette)[i % colorPallette.length]}
              press={() => onClickCategory(cat._id)}
              key={i}
            >
              <Image
                style={styles.img}
                source={{ uri: `${BACKEND}/cdn/${cat.img}` }}
              />
              <Text style={styles.text}>{cat.name}</Text>
              <Image
                style={styles.img2}
                source={require("../assets/right-arrow.png")}
              />
            </Category>
          ))}
        {/* <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/lion.png")} />
          <Text style={styles.text}>Động vật</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category>
        <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/bird.png")} />
          <Text style={styles.text}>Các loại chim</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category>
        <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/car.png")} />
          <Text style={styles.text}>Phương tiện</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category>
        <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/fork.png")} />
          <Text style={styles.text}>Nhà bếp</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category>
        <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/shirt.png")} />
          <Text style={styles.text}>Quần áo</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category>
        <Category
          type={1}
          color={colorPallette[Math.floor(Math.random() * 20)]}
        >
          <Image style={styles.img} source={require("../assets/lion.png")} />
          <Text style={styles.text}>Động vật</Text>
          <Image
            style={styles.img2}
            source={require("../assets/right-arrow.png")}
          />
        </Category> */}
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: getStatusBarHeight(),
    marginBottom: 40,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    // fontFamily: "Helvetica",
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "uppercase",
  },
  img: {
    position: "absolute",
    left: 5,
    width: 70,
    height: 70,
    color: "#fff",
    margin: 30,
  },
  img2: {
    position: "absolute",
    right: 0,
    width: 20,
    height: 20,
    color: "#fff",
    margin: 30,
  },
});

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
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default CategoryListScreen;
