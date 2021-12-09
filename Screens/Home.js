import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "./Components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View></View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
