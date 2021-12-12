import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quiz = () => {
  return (
    <View>
      <View>
        <Text>This is really good Quiz</Text>
      </View>
      <TouchableOpacity>
        <View>Option 1</View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>Option 2</View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>Option 3</View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>Option 4</View>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
