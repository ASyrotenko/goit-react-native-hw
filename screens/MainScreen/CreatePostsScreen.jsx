import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const initialState = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFSgdhQvBlZO6I8s-jtKIYOED1NqEs4xEjA&usqp=CAU",
  title: "",
  location: "",
  comments: [],
  likes: 0,
};

export const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const uploadImg = async () => {
    let userImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    });
    if (!userImage.canceled) {
      setState((prevState) => ({
        ...prevState,
        img: userImage.assets[0].uri,
      }));
    }
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setState((prevState) => ({
      ...prevState,
      img: photo.uri,
    }));
  };

  const onSubmit = () => {
    const newPost = state;
    navigation.navigate("Posts", { newPost });
    setState(initialState);
  };

  const clearAllFields = () => {
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          ...styles.container,
        }}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.contentWrap}>
            <View>
              <View
                style={{
                  height: 240,
                  backgroundColor: "#E8E8E8",
                  borderRadius: 8,
                }}
              >
                <View
                  style={{
                    height: 240,
                    borderRadius: 8,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {state.image && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        borderWidth: 1,
                        zIndex: 1,
                        width: "100%",
                      }}
                    >
                      <Image
                        source={{ uri: state.img }}
                        style={{ height: 240, width: "100%" }}
                      />
                    </View>
                  )}
                  <Camera
                    type={type}
                    ref={setCamera}
                    style={{
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={takePhoto}
                      style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesome name="camera" size={24} color="#ffffff" />
                    </TouchableOpacity>
                  </Camera>
                </View>
                {state.img && (
                  <TouchableOpacity
                    onPress={() =>
                      setState((prevState) => ({ ...prevState, image: "" }))
                    }
                  >
                    <Text
                      style={{ marginTop: 8, fontSize: 16, color: "#BDBDBD" }}
                    >
                      Edit photo
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.inputsContainer}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={{ ...styles.input, marginTop: 32 }}
                    placeholder={"Name..."}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.title}
                    onChange={({ nativeEvent: { text } }) =>
                      setState((prevState) => ({
                        ...prevState,
                        title: text,
                      }))
                    }
                  />
                </View>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={{ ...styles.input, marginTop: 16 }}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.location}
                    onChange={({ nativeEvent: { text } }) =>
                      setState((prevState) => ({
                        ...prevState,
                        location: text,
                      }))
                    }
                  />
                  <View
                    style={{
                      ...styles.locationPlaceholderWrap,
                      display: state.location ? "none" : "flex",
                    }}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text style={styles.locationPlaceholderText}>
                      Location...
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.formBtn,
                  backgroundColor:
                    state.title.length === 0 ||
                    state.location.length === 0 ||
                    state.img == null
                      ? "#F6F6F6"
                      : "#FF6C00",
                }}
                activeOpacity={0.7}
                disabled={
                  state.title.length === 0 ||
                  state.location.length === 0 ||
                  state.img == null
                    ? true
                    : false
                }
                onPress={onSubmit}
              >
                <Text
                  style={{
                    ...styles.formBtnText,
                    color:
                      state.title.length === 0 ||
                      state.location.length === 0 ||
                      state.img == null
                        ? "#BDBDBD"
                        : "#FFFFFF",
                  }}
                >
                  Publish
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{ ...styles.clearAllBtn }}
                onPress={clearAllFields}
              >
                <AntDesign name="delete" size={24} color="#DADADA" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    backgroundColor: "#ffffff",
  },
  scroll: {
    flexGrow: 1,
  },
  contentWrap: {
    justifyContent: "space-between",
    flex: 1,
  },
  imgWrap: {},
  imgContainer: {
    overflow: "hidden",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  img: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  imgBtn: {
    marginTop: 8,
  },
  imgBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputsContainer: {},
  inputWrap: {
    position: "relative",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  locationPlaceholderWrap: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -4 }],
    flexDirection: "row",
    alignItems: "center",
  },
  locationPlaceholderText: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  formBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    height: 51,
    borderRadius: 51 / 2,
  },
  formBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  clearAllBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
