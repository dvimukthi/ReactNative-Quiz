import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "./Components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://st2.depositphotos.com/4398873/7554/v/600/depositphotos_75545389-stock-illustration-quiz-multicolor-letters.jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
