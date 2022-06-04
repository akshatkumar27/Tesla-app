import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Carslists from "./Components/CarLists/index";
import Header from "./Components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Carslists />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
