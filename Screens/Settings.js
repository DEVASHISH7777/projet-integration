import React, { useCallback } from "react";
import { View , Text, StyleSheet, range, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import * as SQLite from "expo-sqlite" 



const db= SQLite.openDatabase('database.db');



const Settings= () =>{
    const [range, setRange]= React.useState(Number);
    const [valeurdB, setValeurdB]= React.useState(Number);

    const getdB= ()=>{
      db.transaction(txn=> 
        {
          txn.executeSql('SELECT valeur FROM tabledB WHERE title ==\'new\';',
          [],
          (sqlTxn, res)=> {
            let len = res.rows.length;
            if (len >0){
              let valdB= res.rows
              setValeurdB(valdB)
              
              
            }
  
          },
          (txn,error)=>{ console.log('Error on get ' + error) }
          )
        }
      )
    } 
/*
    const setdB= () => {
      db.transaction(txn =>
        txn.executeSql('UPDATE tabledB SET valeur=? WHERE title == \'new\';',
        [range],
        (txn, res)=> {
          console.log("db updated")
    
        },
        (txn,error)=>{ console.log(error) }
        )
      )
    
    }
    
    const addData= ()=> {
      db.transaction(txn=> 
        {
          txn.executeSql('CREATE TABLE tabledB ( title VARCHAR(20), valeur INT);')
          txn.executeSql('INSERT INTO tabledB ( title, valeur) VALUES ( \'default\', 50);')
          txn.executeSql('INSERT INTO tabledB ( title, valeur) VALUES ( \'new\', 30);')

        }
      )

    }*/
    return (
        <SafeAreaView style={styles.container}>
          <Button onPress={()=>console.log("ui")} title='Press'/>
            <Text style= {{ fontSize:20, fontWeight:'bold'}}> Sensibilité</Text>
            <Text style= {{ fontSize:20, fontWeight:'bold'}}> {range}</Text>
            <Slider 
            style= {{ width:250, height:40}}
            minimumValue={0}
            maximumValue={100}
            value={50} // MODIFIER POUR METTRE A LA VALEUR STOCKEE EN DB
            onValueChange= {value => setRange(parseInt(value))}
            //onSlidingStart = { ()=> setSliding('Sliding')} // A RETIRER
            />

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
  });

export default Settings