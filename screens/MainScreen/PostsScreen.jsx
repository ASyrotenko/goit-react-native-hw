import { Image, StyleSheet, Text, View } from "react-native";

export const PostsScreen = ({ route }) => {
  const { login, email, image } = route.params;

  console.log(image);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.userPhotoWrap}>
          <Image
            source={
              image
                ? { uri: image }
                : require("../../assets/images/user_photo_default.jpg")
            }
            style={styles.userPhoto}
          />
        </View>
        <View style={styles.userInfoTextWrap}>
          <Text style={styles.userLoginText}>{login}</Text>
          <Text style={styles.userEmailText}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
  },
  userPhoto: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  userInfoTextWrap: {
    marginLeft: 8,
    justifyContent: "center",
  },
  userLoginText: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmailText: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
});
