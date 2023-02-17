import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
  },
  container: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: "#ffffff",
  },

  form: {
    position: "relative",
    paddingTop: 32,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
  },
  inputsWrap: {
    marginTop: 32,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    paddingLeft: 15,
    paddingRight: 15,
  },
  showPasswordBtn: {
    position: "absolute",
    justifyContent: "center",
    right: 16,
    top: "50%",
    transform: [{ translateY: -11 }],
  },
  showPasswordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  formBtn: {
    height: 50,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  formBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  singInLink: {
    marginTop: 16,
  },
  singInText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1b4371",
  },
});
