import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./registrationScreen-styles";

const initialState = {
  image: null,
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState({
    login: false,
    email: false,
    password: false,
  });

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  Keyboard.addListener("keyboardDidHide", () => {
    setIsKeyboardShown(false);
  });

  const addUserImage = async () => {
    let userImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!userImage.canceled) {
      setState((prevState) => ({
        ...prevState,
        image: userImage.assets[0].uri,
      }));
    }
  };

  const removeUserImage = () => {
    setState((prevState) => ({ ...prevState, image: null }));
  };

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (state.login === "" || state.password === "" || state.email === "") {
      return alert("Fill in all fields please!");
    }
    keyboardHide();
    console.log(state);
    setState(initialState);
  };

  const inputOnFocus = (value) => {
    setIsInputFocus((prevState) => ({ ...prevState, [value]: true }));
  };

  const inputOnBlur = (value) => {
    setIsInputFocus((prevState) => ({ ...prevState, [value]: false }));
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../../../assets/images/bg_mount.jpg")}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{ ...styles.container, height: isKeyboardShown ? 370 : 549 }}
          >
            <View style={styles.form}>
              <View style={styles.usePhotoContainer}>
                <Image source={{ uri: state.image }} style={styles.userPhoto} />
                {state.image ? (
                  <TouchableOpacity
                    style={{
                      ...styles.addUserPhotoBtn,
                      borderColor: "#E8E8E8",
                    }}
                    activeOpacity={0.7}
                    onPress={removeUserImage}
                  >
                    <Image
                      source={require("../../../assets/images/removeUserPhoto.png")}
                      style={styles.addUserPhotoBtnImg}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.addUserPhotoBtn}
                    activeOpacity={0.7}
                    onPress={addUserImage}
                  >
                    <Image
                      source={require("../../../assets/images/addUserPhoto.png")}
                      style={styles.addUserPhotoBtnImg}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.title}>Registration</Text>
              <View style={styles.inputsWrap}>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: isInputFocus.login
                        ? "#ffffff"
                        : "#F6F6F6",
                      borderColor: isInputFocus.login ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder={"Login"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.login}
                    onFocus={() => {
                      setIsKeyboardShown(true);
                      inputOnFocus("login");
                    }}
                    onBlur={() => {
                      inputOnBlur("login");
                    }}
                    onChange={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: isInputFocus.email
                        ? "#ffffff"
                        : "#F6F6F6",
                      borderColor: isInputFocus.email ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder={"E-mail address"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.email}
                    onFocus={() => {
                      setIsKeyboardShown(true);
                      inputOnFocus("email");
                    }}
                    onBlur={() => {
                      inputOnBlur("email");
                    }}
                    onChange={(value) => {
                      setState((prevState) => ({ ...prevState, email: value }));
                    }}
                  />
                </View>
                <View style={{ marginTop: 16, position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: isInputFocus.password
                        ? "#ffffff"
                        : "#F6F6F6",
                      borderColor: isInputFocus.password
                        ? "#FF6C00"
                        : "#E8E8E8",
                    }}
                    placeholder={"Password"}
                    placeholderTextColor={"#BDBDBD"}
                    secureTextEntry={isPasswordShown ? false : true}
                    value={state.password}
                    onFocus={() => {
                      setIsKeyboardShown(true);
                      inputOnFocus("password");
                    }}
                    onBlur={() => {
                      inputOnBlur("password");
                    }}
                    onChange={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    style={styles.showPasswordBtn}
                    onPress={() =>
                      setIsPasswordShown((prevState) => !prevState)
                    }
                  >
                    <Text style={styles.showPasswordBtnText}>
                      {isPasswordShown ? "Hide" : "Show"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.formBtn}
                activeOpacity={0.7}
                onPress={onSubmit}
              >
                <Text style={styles.formBtnText}>Sing up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.singInLink}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.singInText}>
                  Already have an account? Sing in
                </Text>
              </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};