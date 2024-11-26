import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerText, headerIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>{headerText}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LikedList");
        }}
      >
        <FontAwesome name={headerIcon} size={24} color="#EEAD2D" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  mainText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "700",
  },
});
