import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { CommentsItem } from "../../components/CommentsList/CommentsList";

export const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const { img, comments } = route.params;

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(comment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.commentsListWrap}>
        <SafeAreaView>
          <FlatList
            data={comments}
            renderItem={({ item, index }) =>
              CommentsItem(item, index, comments)
            }
            keyExtractor={(item) => item.date}
          />
        </SafeAreaView>
      </View>
      <View style={styles.commentsInputWrap}>
        <TextInput
          placeholder="Comment..."
          placeholderTextColor={"#BDBDBD"}
          value={comment}
          onChange={({ nativeEvent: { text } }) => {
            setComment(text);
          }}
          style={styles.commentsInput}
        />
        <TouchableOpacity style={styles.commentsSubmitBtn} onPress={onSubmit}>
          <AntDesign name="arrowup" size={14} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
    top: -34,
    zIndex: 1,
  },
  imgWrap: {
    width: "100%",
    height: 240,
  },
  img: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  commentsListWrap: {
    flex: 1,
    marginTop: 32,
  },
  commentsInputWrap: {
    marginBottom: 16,
    marginTop: 16,
    position: "relative",
  },
  commentsInput: {
    height: 50,
    paddingLeft: 16,
    paddingRight: 42,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  commentsSubmitBtn: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -17 }],
    right: 8,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
  },
});
