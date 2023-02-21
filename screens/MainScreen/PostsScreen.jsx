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

const renderItem = ({ item }) => (
  <View style={styles.postItemContainer}>
    <View style={styles.postItemImgContainer}>
      <Image source={{ uri: item.img }} style={styles.postItemImg} />
    </View>
    <Text style={styles.postItemTitle}>{item.title}</Text>
    <View style={styles.postItemInfoContainer}>
      <View style={styles.postItemRateContainer}>
        <TouchableOpacity style={styles.postItemCommentWrap}>
          {item.comments.length === 0 ? (
            <Ionicons name="md-chatbubble-outline" size={18} color="#BDBDBD" />
          ) : (
            <Ionicons name="ios-chatbubble" size={18} color="#FF6C00" />
          )}

          <Text
            style={{
              ...styles.postItemCommentsCount,
              color: item.comments.length === 0 ? "#BDBDBD" : "#212121",
            }}
          >
            {item.comments.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postItemLikeWrap}>
          <AntDesign name="like2" size={18} color="#FF6C00" />
          <Text style={styles.postItemLikeCount}>{item.likes}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.postItemLocationWrap}>
        <Feather name="map-pin" size={24} color="#BDBDBD" />
        <Text style={styles.postItemLocationText}>{item.location}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export const PostsScreen = ({ route }) => {
  const { login, email, image } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer}>
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
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.postsList}>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#ffffff",
  },
  userContainer: {
    paddingTop: 32,
    paddingBottom: 32,
    flexDirection: "row",
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#ffffff",
  },
  userPhoto: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
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
  postsList: {},
  postItemContainer: {
    marginBottom: 34,
  },
  postItemImgContainer: {
    width: "100%",
    height: 240,
  },
  postItemImg: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  postItemTitle: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  postItemInfoContainer: {
    marginTop: 11,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postItemRateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postItemCommentWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  postItemCommentsCount: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  postItemLikeWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 27,
  },
  postItemLikeCount: {
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  postItemLocationWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  postItemLocationText: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
