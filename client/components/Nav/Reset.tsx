import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors/colors.js';
import Icon from 'react-native-vector-icons/Entypo';
import image from "../../images/PasswordReset.png"



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



export default function Reset() {
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


  const handleSubmitPress = () => {}








  return (
    
  <View style={styles.wrapper}>
    <View style={{width: '80%', top: -100, justifyContent: 'center', alignItems: 'center'}}>
    <Image source={image} style={image} />
    </View>

    <View style={{width: '80%'}}>
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.title}>Forgot</Text>
      <Text style={styles.title2}>password ?</Text>
      <Text style={styles.text}>Don’t worry! It happens. 
        Please enter the email address associated with your account. 
        You will receive an email with instructions.</Text>
    </View>

    <View style={styles.emailInput}>
    <Icon name='email' size={18}   style={styles.icon} />
      <TextInput
            placeholder='Email'
            style={styles.input}
            /* onChangeText={handleInput}
            value={email}  */
          />
    </View>

    <View style={{marginTop: 20}}>
    <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSubmitPress}
      >
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>

    
  );
}



const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    flexDirection: 'column'
  }, 
  image: {
    position: "relative",
  },
    title: {
      
      top: -45,
      fontSize: 26,
      color: colors.textLight,
      fontFamily: "Roboto_500Medium",
      textTransform: 'uppercase',
      
      lineHeight: 30,
      justifyContent: 'center'
      
    },
    title2: {
      
      top: -44,
      fontSize: 26,
      color: colors.textLight,
      fontFamily: "Roboto_500Medium",
      textTransform: 'uppercase',
      
      lineHeight: 30,
      justifyContent: 'center'
      
    },
    text: {
      top: -25,
      fontSize: 14,
      color: colors.textDark,
      fontFamily: "Roboto_400Regular",
      lineHeight: 14
      
    },
    input: {
      width: '80%', 
      borderBottomColor: colors.textInput,
      borderBottomWidth: 1,
      padding: 5,
      marginTop: 10,
      top: -7
    },
  
    sendButton: {
      justifyContent: 'center',
      backgroundColor: colors.buttonViolet,
      height: 41,
      
      borderRadius: 7,
      
    } as const,

  sendButtonText: {
    fontSize: 15,
      color: colors.textGreyLight,
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "Roboto_500Medium",
  },
  emailInput: {
    flexDirection: 'row', 
    alignItems: 'center'
},
  icon: {
    color: colors.textInput
},
  
  

});