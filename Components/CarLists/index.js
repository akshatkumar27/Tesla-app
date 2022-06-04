import React from "react";
import { View, FlatList,Dimensions } from "react-native";
import cars from "./cars";
import Caritem from "../CarItem/Index";
import styles from "./Styles";

const Carslists = () => {
  return (
    <View style={styles.container}>
        {/* rendering data from array */}
      <FlatList data={cars} 
      renderItem={({item}) => <Caritem car={item} />} 
      snapToAlignment={'start'}
      showsVerticalScrollIndicator={false}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />

    
    </View>
  );
};

export default Carslists;
