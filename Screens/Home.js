import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View , Text, Button, TouchableOpacity, Image, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





const Home= () =>{
    const navigation= useNavigation();
    return (
        <SafeAreaView style= {StyleSheet.container}>
            <Text> 
                
            </Text>
            <TouchableOpacity  
            activeOpacity={0.5}
            onPress={()=>{ navigation.navigate("Settings")}}>
                <Image
                source={require('../Img/ParamButton.png')}
                style= {styles.logo}
                 />
                
            </TouchableOpacity>
            <TouchableOpacity  
            activeOpacity={0.5}
            onPress={()=>{ navigation.navigate("Alarms")}}>
                <Image
                source={require('../Img/Reveil.jpg')}
                style= {styles.logo}
                 />
                
            </TouchableOpacity>
            <TouchableOpacity  
            activeOpacity={0.5}
            onPress={()=>{ navigation.navigate("Appareillage")}}>
                <Image
                source={require('../Img/Bluetooth.png')}
                style= {styles.logo}
                 />
                
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 100,
      height: 100,
    },
  });

export default Home