import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,Stack} from '@react-navigation/stack`'
import {NavigationContainer,DefaultTheme} from "@react-navigation/native";
import {useFonts} from 'expo-font'
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
export default function App() {
  return (
   <NavigationContainer>
       <StackNavigator>
           <Stack.Screen/>
           <Stack.Screen/>
       </StackNavigator>
   </NavigationContainer>
  );
}
