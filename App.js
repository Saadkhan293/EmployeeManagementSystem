import React from "react";
import { StyleSheet } from "react-native";

import Employeelogin from "./components/Employeelogin";
import EmployeeSignup from "./components/EmployeeSignup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee Sign in" component={Employeelogin} />
        <Stack.Screen name="Employee Sign up" component={EmployeeSignup} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
