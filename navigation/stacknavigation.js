import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  
} from "react-native";
import Employeelogin from "../components/Employeelogin";
import EmployeeSignup from "../components/EmployeeSignup";
import Jobs from "../components/Jobs";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from '../components/Notifications';
const Stack = createStackNavigator();

 export default function Stacknavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1B8057",
          elevation:0,
          shadowOpacity:0,
          borderBottomWidth:0,
        },
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Employee Sign in " component={Employeelogin} />
      <Stack.Screen name="Employee Sign up " component={EmployeeSignup} />
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="Notifications" component={Notifications} />

    </Stack.Navigator>
  );
}
