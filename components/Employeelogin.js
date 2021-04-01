import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,navigation
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Employeelogin({navigation}) {
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
        Employee login
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email or Username"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
      ></TextInput>
      <TouchableOpacity style={styles.loginbutton}>
        <Icon style={{ textAlign: "center" }} name="key">
          <Text style={{ textAlign: "center" }}> Login</Text>
        </Icon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbutton} onPress={()=>navigation.navigate('Employee Sign up')}>
        <Icon style={{ textAlign: "center" }} name="user">
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            SignUp
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
  },
});
