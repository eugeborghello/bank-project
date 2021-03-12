import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Reset } from './src/components/Reset';
import AppLoading from 'expo-app-loading';
import colors from './assets/colors/colors';
import * as PasswordReset from "./PasswordReset.png";
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Entypo';

Icon.loadFont();


import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';



export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;

  const data = [
  
  {
      title: 'FORGOT PASSWORD?',
      text: "Don’t worry! It happens. Please enter the email address associated with your account. You will receive an email with instructions.",
      // image: require('../../assets/3.jpg'),
      bg: '#22bcb5',
    },
  ];
  
const renderItem = ({item}) => {
return (
  <Text>Reset Password</Text>
)
}

const keyExtractor = (item) => item.title;

  return (
    
    <View style={{flex: 1}}>
    <StatusBar translucent backgroundColor="transparent" />
    <Image source={require("./images/PasswordReset.png")} />
    <Icon name='email' size={15} color='black' />
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={data}
    />
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto_700Bold'
  },
  tinyLogo: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.textLink,
    fontFamily: 'Roboto_100Thin'
  },
});
