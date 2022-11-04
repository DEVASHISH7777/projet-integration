import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//-------------------------------------------------------------------------------------------------------------------------------------
//Importations faites
import { Button,Image } from 'react-native';
import { useState,useEffect } from 'react';
//-------------------------------------------------------------------------------------------------------------------------------------


export default function App() {


//-------------------------------------------------------------------------------------------------------------------------------------
  //Fonctions ajoutées
  function fonctionTest(){
    console.log("Ceci est un test")
  }

  useEffect(() => {
    test()
  }, [])

//-------------------------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------------------------
  //Variables ajoutées
  const test = () => {
    fetch('https://aws.random.cat/meow')
    .then((res) => {
      return res.json()
    }).then((data) => {
      setImg(data.file)
      //console.log(img)
    })
  }

  const [img, setImg] = useState(' ')
//-------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------
  //Corps de l'App
  return (
    <View style={styles.container}>
      <Image
        source={{uri: img}}
        style={styles.img}
      /> 

      <Button 
      onPress={test}
      title="Nouveau chat ta mère"
      color="#f00"
      /> 

      <StatusBar style="auto" />
    </View>
  );
}
//-------------------------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '65%',
    marginBottom: '5%'
  }
});
