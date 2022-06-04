import React from "react";
import { View, Text,Image } from "react-native";
import styles from "../Header/styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
      <Image style={styles.menu} source={require('../../assets/menu.png')}></Image>
    </View>
  );
};
export default Header;
