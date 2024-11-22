import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

const Header = ({headerText, headerIcon}) => {
  return (
    <View>
      <Text>{headerText}</Text>
      <FontAwesome icon={headerIcon} size={24} color ='#EEAD2D'/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create ({

})