import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import * as SQLite from 'expo-sqlite'


const db= SQLite.openDatabase('database.db');


export default function App() {
  return (
<NavigationContainer>
  <StackNavigator/>
  <StatusBar style='dark'/>
</NavigationContainer>
  );
}


