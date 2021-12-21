import { createStackNavigator } from "react-native";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default Stack;

const styles = StyleSheet.create({});
