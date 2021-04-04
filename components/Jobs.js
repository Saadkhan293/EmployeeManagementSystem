import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const renderItem = ({ item }) => <Item title={item.title} />;

export default function Jobs() {
  return (

    
    <View style={styles.container}>
     

      <FlatList
      
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity><View style={styles.card}>
            <Text style = {styles.TextDecor}>{item.title}</Text>
            <Text numberOfLines={3}>lorem ipsum sdngfakl,fnbakfb  k bnakfbakfaqba ka fbakfbak bqk fbakfabfk a bkafbakfba kab qkab 
            afhakfakhf ak akh akfakh ksh  ka hak hfak
            afhakfahkfahfgkahfkahfakhfa k  h qkfhakhfka hak h
            afdakfhakjfhakjfhakfhakfhafka hka hfkafhakfhakfhakhf ak h </Text>
            
          </View></TouchableOpacity>
        )}
      ></FlatList>
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
  card: {
    height: 100,
    alignContent: "flex-start",
    justifyContent: 'center',
    backgroundColor: "#557545",
    borderRadius: 15,
    shadowColor: "transparent",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    width:380,

  },
  TextDecor: {
    alignItems:"center",
    fontWeight:"bold",
    position: 'relative',

  },
});
