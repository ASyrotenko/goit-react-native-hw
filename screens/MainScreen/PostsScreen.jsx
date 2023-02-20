import { Image, StyleSheet, Text, View } from "react-native";

export const PostsScreen = ({ route }) => {
  const { login, email, image } = route.params;

  console.log(image);
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            width: 60,
            height: 60,
          }}
        >
          <Image
            source={
              image
                ? { uri: image }
                : require("../../assets/images/user_photo_default.jpg")
            }
            style={{
              width: "100%",
              flex: 1,
              resizeMode: "cover",
              borderRadius: 16,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 8,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Bold",
              fontSize: 13,
              lineHeight: 15,
              color: "#212121",
            }}
          >
            {login}
          </Text>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 11,
              lineHeight: 13,
              color: "#212121",
            }}
          >
            {email}
          </Text>
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
});
