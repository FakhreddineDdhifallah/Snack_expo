import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen.js";
import { ScheduleScreen } from "./ScheduleScreen.js";
import { PaymentScreen } from "./PaymentScreen.js";
import { LandingPage } from "./LandingPage.js";
import { SignupScreen } from "./SignupScreen.js";
import LoginScreen from "./LoginScreen.js";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={LandingPage} />

      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="schedule" component={ScheduleScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};
