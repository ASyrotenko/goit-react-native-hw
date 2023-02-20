import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: "#ffffff",
  },
  usePhotoContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userPhoto: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  addUserPhotoBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  addUserPhotoBtnImg: {
    width: 13,
    height: 13,
  },
  form: {
    position: "relative",
    paddingTop: 92,
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
