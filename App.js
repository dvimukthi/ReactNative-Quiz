import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import Home from "./Screens/Home";
import Quiz from "./Screens/Quiz";
import Result from "./Screens/Result";

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
