import { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// import { posts } from "./../../posts";
import { PostsList } from "../../components/PostsList/PostsList";
import { HeaderBackButton } from "./../../components/HeaderBackButtom/HeaderBackButtom";

export const ProfileScreen = ({ navigation, route }) => {
  // const { login, email, image, newPost } = route.params;
  // const [allPosts, setAllPosts] = useState([...posts]);

  // useEffect(() => {
  //   if (newPost) {
  //     setAllPosts((prevState) => [newPost, ...prevState]);
  //   }
  // }, [newPost]);

  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={require("../../assets/images/bg_mount.jpg")}
        style={styles.backgroundImg}
      />

      <View style={styles.container}>
        <Image
          // source={
          //   image
          //     ? { uri: image }
          //     : require("../../assets/images/user_photo_default.jpg")
          // }
          source={require("../../assets/images/user_photo_default.jpg")}
          style={styles.userImg}
        />
        <HeaderBackButton
          navigation={navigation}
          style={{ position: "absolute", top: 22, right: 16 }}
        />
        <View style={styles.loginWrap}>
          {/* <Text style={styles.loginText}>{login}</Text> */}
        </View>
        <View style={styles.listWrap}>
          {/* <SafeAreaView>
            <FlatList
              data={allPosts}
              renderItem={({ item }) => (
                <PostsList
                  item={item}
                  onCommentsPress={() => {
                    navigation.navigate("Comments", {
                      img: item.img,
                      comments: item.comments,
                    });
                  }}
                  onMapPress={() => {
                    navigation.navigate("Map");
                  }}
                />
              )}
              keyExtractor={(item, indx) => indx.toString()}
            />
          </SafeAreaView> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backgroundImg: {
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  container: {
    position: "relative",
    height: 620,
    width: "100%",
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingTop: 92,
  },
  userImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -45 }],
  },
  loginWrap: {
    alignItems: "center",
  },
  loginText: {
    fontFamily: "Roboto-Medium",
    fontSize: 35,
    color: "#212121",
  },
  listWrap: {
    flex: 1,
    marginTop: 33,
  },
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
