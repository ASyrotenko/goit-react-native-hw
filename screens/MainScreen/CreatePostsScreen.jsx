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
  Dimensions,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  image: null,
  title: "",
  location: "",
};

export const CreatePostsScreen = () => {
  const [state, setState] = useState(initialState);

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
        image: userImage.assets[0].uri,
      }));
    }
  };

  const onSubmit = () => {
    console.log(state);
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <View>
              <TouchableOpacity style={styles.imgWrap} onPress={uploadImg}>
                <View style={styles.imgContainer}>
                  <Image
                    source={
                      state.image
                        ? { uri: state.image }
                        : require("../../assets/images/create_post_default_photo.jpg")
                    }
                    style={styles.img}
                  />
                </View>
                <TouchableOpacity style={styles.imgBtn} onPress={uploadImg}>
                  <Text style={styles.imgBtnText}>
                    {state.image ? "Edit photo" : "Upload photo"}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
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
                    state.image == null
                      ? "#F6F6F6"
                      : "#FF6C00",
                }}
                activeOpacity={0.7}
                disabled={
                  state.title.length === 0 ||
                  state.location.length === 0 ||
                  state.image == null
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
                      state.image == null
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
