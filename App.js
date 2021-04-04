import React from "react";
import { StyleSheet } from "react-native";

import Employeelogin from "./components/Employeelogin";
import EmployeeSignup from "./components/EmployeeSignup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stacknavigation from './navigation/Stacknavigation';

import Notifications from "./components/Notifications";
const Stack = createStackNavigator();

export default function App() {
  return (
  //   <NavigationContainer>
  //  <Stacknavigation />
  //   </NavigationContainer>
    <Notifications />

  );
}
