import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://www.nycoproducts.com/wp-content/uploads/2019/09/Disinfecting-Quiz-30881050_m.jpg",
          }}
        />
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
