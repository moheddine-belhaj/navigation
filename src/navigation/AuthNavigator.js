import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    /> 
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
