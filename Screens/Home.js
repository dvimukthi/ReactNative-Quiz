import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "./Components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View>
        <Image
          source={{
            uri: "https://iconscout.com/illustration/qa-service-3678715",
          }}
          style={styles.banner}
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
});
