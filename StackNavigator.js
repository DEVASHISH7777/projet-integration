import React from "react";
import { View , Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Alarms from "./Screens/Alarms";
import Appareillage from "./Screens/Appareillage";

const Stack= createNativeStackNavigator();

const StackNavigator= () =>{
    return (
      <Stack.Navigator >
        <Stack.Group>
            <Stack.Screen name= 'Home' component= { Home}/>
            <Stack.Screen name= 'Settings' component= {Settings}/>
            <Stack.Screen name= 'Alarms' component= {Alarms}/>
            <Stack.Screen name= 'Appareillage' component= {Appareillage}/>



        </Stack.Group>
      </Stack.Navigator>
    );
}

export default StackNavigator