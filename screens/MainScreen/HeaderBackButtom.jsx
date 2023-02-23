import { StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export const HeaderBackButton = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.goBackBtn}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    marginRight: 16,
  },
});
