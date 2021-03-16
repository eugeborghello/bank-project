import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image,ImageBackground, Button } from 'react-native';
import { Link } from "@react-navigation/native";
import axios from 'axios';
import styles from "./styles";

export default function Home({navigation}) {

    return (
        <ImageBackground
        source={{uri:`https://image.freepik.com/foto-gratis/fondo-mesa-madera-blanca_53876-89436.jpg`}}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../../assets/images/veski.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.text}>Enjoy managing your money with veski, we hope your experience is satisfactory</Text>
          <Text style={styles.text2}>Get Started</Text>
          <View style={styles.containerButtons}>
              
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    );
}



