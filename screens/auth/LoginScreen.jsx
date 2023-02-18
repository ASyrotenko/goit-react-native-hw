import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "./auth-styles";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState({
    email: false,
    password: false,
  });

  Keyboard.addListener("keyboardDidHide", () => {
    setIsKeyboardShown(false);
  });

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (state.password === "" || state.email === "") {
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
        source={require("../../assets/images/bg_mount.jpg")}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{ ...styles.container, height: isKeyboardShown ? 248 : 489 }}
            onPress={keyboardHide}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Sing in</Text>
              <View style={styles.inputsWrap}>
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
                    onChange={({ nativeEvent: { text } }) => {
                      setState((prevState) => ({ ...prevState, email: text }));
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
                    onChange={({ nativeEvent: { text } }) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: text,
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
                <Text style={styles.formBtnText}>Sing in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.singInLink}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.singInText}>
                  Don't have an account? Sing up
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
