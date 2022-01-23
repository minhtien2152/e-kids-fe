import React, { useEffect, useRef, useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { listWordDetail } from "../actions/wordActions";
import { Audio } from "expo-av";
import { BACKEND } from "../../define";
import { checkPronun } from "../actions/pronunActions";
import Toast from "react-native-toast-message";
import { listProgressDetail, updateProgress } from "../actions/progressActions";
let recording = new Audio.Recording();

export default function WordScreen({ navigation }) {
  const dispatch = useDispatch();
  const route = useRoute();
  const word_id = route.params.word ? route.params.word : "";
  const wordDetail = useSelector((state) => state.wordDetail);
  const { loading, error, word } = wordDetail;
  const [init, setInit] = useState(false);
  const [rec, setRec] = useState(false);
  const [sound, setSound] = useState();
  const [uri, setUri] = useState();
  const [unlock, setUnlock] = useState(false);
  const [unlockList, setUnlockList] = useState([]);
  async function playSound(word) {
    console.log("Loading Sound");
    console.log(RecordedURI);
    const { sound } = await Audio.Sound.createAsync({
      uri: `https://ssl.gstatic.com/dictionary/static/sounds/oxford/${word.toLowerCase()}--_us_1.mp3`,
    });
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  const pronunCheck = useSelector((state) => state.pronunCheck);
  const { loading: pronunLoading, error: pronunError, pronun } = pronunCheck;

  const progressDetail = useSelector((state) => state.progressDetail);
  const {
    loading: progressLoading,
    error: progressError,
    progress,
  } = progressDetail;

  const progressUpdate = useSelector((state) => state.progressUpdate);
  const {
    loading: progressUpdateLoading,
    error: progressUpdateError,
    success,
  } = progressUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    setUnlock(false);
    dispatch(listProgressDetail(userInfo?._id));
    console.log(userInfo?._id);
  }, []);

  useEffect(() => {
    if (progress) setUnlockList(progress?.wordList);
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    if (unlockList && unlockList.includes(word_id)) setUnlock(true);
    console.log(unlockList);
  }, [unlockList]);

  async function playRec(word) {
    console.log("Loading Sound");
    console.log(RecordedURI);
    const { sound } = await Audio.Sound.createAsync({
      uri: RecordedURI,
    });
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    if (init && pronun && !pronunLoading) {
      Toast.show({
        type: "info",
        text1: "Chính xác",
      });
      setUnlock(true);
    }
  }, [pronun, pronunLoading]);

  useEffect(() => {
    dispatch(listWordDetail(word_id));
  }, []);

  // Refs for the audio
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());

  // States for UI
  const [RecordedURI, SetRecordedURI] = useState("");
  const [AudioPermission, SetAudioPermission] = useState(false);
  const [IsRecording, SetIsRecording] = useState(false);
  const [IsPLaying, SetIsPLaying] = useState(false);

  useEffect(() => {
    GetPermission();
  }, []);
  const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    SetAudioPermission(getAudioPerm.granted);
  };
  // async function startRecording() {
  //   try {
  //     setRec(true);
  //     console.log("Requesting permissions..");
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     });
  //     console.log("Starting recording..");
  //     await recording.prepareToRecordAsync(
  //       Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
  //     );
  //     await recording.startAsync();
  //     console.log("Recording started");
  //   } catch (err) {
  //     console.error("Failed to start recording", err);
  //   }
  // }
  // async function stopRecording() {
  //   console.log("Stopping recording..");
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   setUri(recording.getURI());
  //   console.log("Recording stopped and stored at", uri);
  //   setRec(false);
  // }
  // Function to start recording
  const startRecording = async () => {
    try {
      // Check if user has given the permission to record
      if (AudioPermission === true) {
        try {
          setRec(true);
          // Prepare the Audio Recorder
          console.log("Starting recording..");
          await AudioRecorder.current.prepareToRecordAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );

          // Start recording
          await AudioRecorder.current.startAsync();
          SetIsRecording(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        // If user has not given the permission to record, then ask for permission
        GetPermission();
      }
    } catch (error) {}
  };

  // Function to stop recording
  const stopRecording = async () => {
    try {
      setRec(false);
      // Stop recording
      console.log("Stopping recording..");
      await AudioRecorder.current.stopAndUnloadAsync();

      // Get the recorded URI here
      const result = AudioRecorder.current.getURI();
      if (result) SetRecordedURI(result);

      // Reset the Audio Recorder
      AudioRecorder.current = new Audio.Recording();
      SetIsRecording(false);
      const file = { uri: result, type: "audio/mp4", name: "ex.m4a" };
      console.log(file);
      dispatch(checkPronun({ file: file, word: word.name }));
      dispatch(updateProgress({ user: userInfo._id, word: word_id }));
      setInit(true);
    } catch (error) {}
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
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
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              {!loading && word && (
                <>
                  <Text style={styles.text}>{word.name}</Text>

                  <Text style={styles.wordText}>{word.meaning}</Text>
                  <View style={styles.speakerCtn}>
                    <TouchableOpacity onPress={() => playSound(word.name)}>
                      <Image
                        style={styles.img}
                        source={require("../assets/speaker.jpg")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={rec ? stopRecording : startRecording}
                    >
                      <Image
                        style={styles.img}
                        source={require("../assets/mic.jpg")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={unlock ? null : styles.lockCtn}>
                    <Image
                      style={unlock ? styles.wordImg : styles.lockImg}
                      source={
                        unlock
                          ? { uri: `${BACKEND}/cdn/${word.img}` }
                          : require("../assets/locked.png")
                      }
                    />
                  </View>
                </>
              )}
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "rgba(32,52,67,255)",
  },
  imgBg: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
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
    color: "#000",
    fontWeight: "bold",
    paddingVertical: 15,
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "uppercase",
  },
  wordText: {
    fontSize: 24,
    color: "#40a9d3",
    fontWeight: "bold",

    textAlign: "center",
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
    marginTop: 70,
    borderRadius: 10,
    flex: 1,
    flexDirection: "column",
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  speakerCtn: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",

    marginTop: 20,
  },
  wordImg: {
    height: 270,
    width: 270,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#000",
    marginTop: 20,
  },
  lockImg: {
    height: 70,
    width: 70,
    padding: 30,
    borderWidth: 1,
    borderStyle: "dotted",

    alignSelf: "center",
  },
  lockCtn: {
    height: 270,
    width: 270,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#000",
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
    borderRadius: 1,
  },
});
