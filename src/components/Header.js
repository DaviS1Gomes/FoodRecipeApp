import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

const Header = ({headerText, headerIcon}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color ='#EEAD2D'/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create ({
   mainContainer:{
    flexDirection: 'row'
   },
   mainText: {
      flex: 1,
      fontSize: 22,
      fontWeight: "700"
   }
})