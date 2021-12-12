import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>This is really good Quiz</Text>
      </View>
      <View style={styles.options}>
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
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
});
