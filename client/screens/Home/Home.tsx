import React from 'react';
import { Text, View, TouchableOpacity, Image,ImageBackground} from 'react-native';
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';
import HandleDrawer from '../../components/Nav/HandleDrawer';

export default function Home() {
    const navigation = useNavigation()
    return (
      <>
        <ImageBackground
        source={{uri:`https://image.freepik.com/foto-gratis/fondo-mesa-madera-blanca_53876-89436.jpg`}}
        style={styles.background}
      >
        <HandleDrawer/>
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
</>
    );
}



