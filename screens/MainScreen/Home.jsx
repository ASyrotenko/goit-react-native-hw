import { StyleSheet, TouchableOpacity, View, Button, Text } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { CommentsScreen } from "./CommentsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { MapScreen } from "./MapScreen";

const MainTab = createBottomTabNavigator();

const CustomTabCreatePost = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: "#FF6C00",
          width: 70,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const MyHeader = ({ title, navigation }) => {
  return (
    <View
      style={{
        height: 88,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderColor: "#F6F6F6",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 11,
        position: "relative",
      }}
    >
      <Text
        style={{ fontFamily: "Roboto-Medium", fontSize: 17, color: "#212121" }}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={{ position: "absolute", bottom: 10, right: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Feather name="log-out" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

export const Home = ({ navigation, route }) => {
  const { login, email, image } = route.params;

  return (
    <MainTab.Navigator
      initialRouteName={"Posts"}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          borderTopWidth: 1,
          borderColor: "#F6F6F6",
          paddingRight: 82,
          paddingLeft: 82,
        },
      }}
    >
      <MainTab.Screen
        initialParams={{ login, email, image }}
        options={{
          title: "Posts",

          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <MyHeader title={title} navigation={navigation} />;
          },
          headerStyle: { justifyContent: "center", alignItems: "center" },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Press me"
              color="#fff"
            />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color={focused ? "#FF6C00" : "#212121"}
            />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "Create Post",
          header: ({ route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <MyHeader title={title} navigation={navigation} />;
          },
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={13} color="#ffffff" />
          ),
          tabBarButton: (props) => <CustomTabCreatePost {...props} />,
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "Profile",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <MyHeader title={title} navigation={navigation} />;
          },
          cardStyle: { justifyContent: "center" },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="user"
              size={size}
              color={focused ? "#FF6C00" : "#212121"}
            />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addPostBtn: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
