import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen } from "./components/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./components/Screens/LoginScreen/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerStyle: {
                height: 0,
              },
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerStyle: {
                height: 0,
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}> */}
      {/* <ImageBackground
          source={require("./assets/images/bg_mount.jpg")}
          style={styles.bgImage}
        > */}
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* </ImageBackground> */}
      {/* <StatusBar style="auto" /> */}
      {/* </View>
      </TouchableWithoutFeedback> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
