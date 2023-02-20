import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { posts } from "../../posts";

export const PostsScreen = ({ route }) => {
  const { login, email, image } = route.params;

  return (
    <View>
      <TouchableOpacity style={styles.container}>
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
      </TouchableOpacity>
      <View>
        <SafeAreaView style={{ marginHorizontal: 16 }}>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 34 }}>
                <View style={{ width: "100%", height: 240 }}>
                  <Image
                    source={{ uri: item.img }}
                    style={{
                      width: "100%",
                      flex: 1,
                      resizeMode: "cover",
                      borderRadius: 16,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 8,
                    fontFamily: "Roboto-Regular",
                    fontSize: 16,
                    color: "#212121",
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    marginTop: 11,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {item.comments.length === 0 ? (
                        <Ionicons
                          name="md-chatbubble-outline"
                          size={18}
                          color="#BDBDBD"
                        />
                      ) : (
                        <Ionicons
                          name="ios-chatbubble"
                          size={18}
                          color="#FF6C00"
                        />
                      )}

                      <Text
                        style={{
                          marginLeft: 8,
                          fontFamily: "Roboto-Regular",
                          fontSize: 16,
                          color:
                            item.comments.length === 0 ? "#BDBDBD" : "#212121",
                        }}
                      >
                        {item.comments.length}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 27,
                      }}
                    >
                      <AntDesign name="like2" size={18} color="#FF6C00" />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontFamily: "Roboto-Regular",
                          fontSize: 16,
                          color: "#212121",
                        }}
                      >
                        {item.likes}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text
                      style={{
                        marginLeft: 8,
                        fontFamily: "Roboto-Regular",
                        fontSize: 16,
                        textDecorationLine: "underline",
                      }}
                    >
                      {item.location}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
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
