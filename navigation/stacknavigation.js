import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Employeelogin from "../components/Employeelogin";
import EmployeeSignup from "../components/EmployeeSignup";

const Stack = createStackNavigatior();

export default function stacknavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Employeelogin} />
        <Stack.Screen component={EmployeeSignup} />|
      </Stack.Navigator>
    </NavigationContainer>
  );
}

