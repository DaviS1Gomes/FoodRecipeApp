import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={20} color={"#EEAD2D"} />
      <TextInput style={styles.textMain} {...rest} />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    alignItems: "center",
    gap: 5,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  textMain: {
    paddingLeft: 8,
    fontSize: 16,
    color: "#808080",
  },
});
