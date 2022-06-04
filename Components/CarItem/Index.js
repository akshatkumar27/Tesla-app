import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./Styles";
import Button from "../StyleBtn/Button";
const Caritem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.ButtonContainer}>
        <Button
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("custom pressed");
          }}
        />

        <Button
          type="secondary"
          content="Existing price"
          onPress={() => {
            console.warn("inventory pressed");
          }}
        />
      </View>
    </View>
  );
};
export default Caritem;
