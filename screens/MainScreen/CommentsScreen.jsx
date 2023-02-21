import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { format } from "date-fns";

const CommentsItem = ({ item }) => {
  const date = item.date.split(" ");
  const dateFormat = `${date[2]} ${date[1]}, ${date[3]} | ${date[4].slice(
    0,
    5
  )}`;

  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 24,
      }}
    >
      <View>
        <Image
          source={{ uri: item.userPhoto }}
          style={{ width: 28, height: 28, borderRadius: 14 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 16,
          padding: 16,
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          borderTopRightRadius: 6,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            color: "#212121",
            fontSize: 13,
          }}
        >
          {item.text}
        </Text>
        <Text
          style={{
            marginLeft: "auto",
            marginTop: 8,
            fontFamily: "Roboto-Regular",
            fontSize: 10,
            color: "#BDBDBD",
          }}
        >
          {dateFormat}
        </Text>
      </View>
    </View>
  );
};

export const CommentsScreen = ({ route }) => {
  const { img, comments } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 240 }}>
        <Image
          source={{ uri: img }}
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
          flex: 1,
          marginTop: 32,
        }}
      >
        <SafeAreaView>
          <FlatList
            data={comments}
            renderItem={CommentsItem}
            keyExtractor={(item) => item.date}
          />
        </SafeAreaView>
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
});
