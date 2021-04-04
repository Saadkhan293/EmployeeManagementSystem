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
import Icon from "react-native-vector-icons/FontAwesome5";

export default function EmployeeSignup({navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          padding: "2%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Employee Sign up
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="UserName"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Phone Number"
        placeholderTextColor="#CCCCCC"
        keyboardType="numeric"
      ></TextInput>
      <TouchableOpacity style={styles.signupbutton} onPress={()=>navigation.navigate("Jobs")}>
        <Icon style={{ textAlign: "center" }} name="user">
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            Register
          </Text>
        </Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B8057",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "5%",
    width: "60%",
    borderBottomWidth: 1,
    borderColor: "white",
    margin: "3%",
    color: "#CCCCCC",
  },
  loginbutton: {
    width: "60%",
    backgroundColor: "#98FB98",
    padding: "4%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#98FB98",
    textAlign: "center",
    margin: "5%",
  },
  signupbutton: {
    width: "60%",
    backgroundColor: "#FCA503",
    padding: "4%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#FCA503",
    textAlign: "center",
    margin:'3%'
  },
});
