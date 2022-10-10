import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const test = () => {
    fetch('https://aws.random.cat/meow')
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
    })
  }

  return (
    <View style={styles.container}>
      <Text>Ceci est une application pour malentendants!</Text>
      <Button 
      onPress={test}
      title="Test"
      color="#841584"
      accessibilityLabel="Learn more about this purple button" 
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
