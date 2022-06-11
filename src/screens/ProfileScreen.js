import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  Button,
} from "react-native";
const sHeight = Dimensions.get("window").height;
const sWidth = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.avatar}>
          <Image
            style={styles.image}
            source={require("../assets/person/1.png")}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Thai Vinh</Text>
          <Text style={styles.mail}>thailnv2603@gmail.com</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Chủ đề yêu thích</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Từ vựng yêu thích</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Từ đang học</Text>
        </View>
        <View style={styles.button}>
          <Button title="Đăng xuất" color="#841584" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  mainView: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: sHeight - 32,
    paddingTop: 60,
    marginTop: 100,
    width: sWidth,
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 120,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginLeft: (sWidth - 120) / 2,
  },
  image: {
    width: 120,
    height: 120,
  },
  userInfo: {
    paddingTop: 16,
  },
  name: {
    textAlign: "center",
    fontSize: 20,
  },
  mail: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
  },
  section: {
    padding: 16,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 32,
  },
});

export default ProfileScreen;
