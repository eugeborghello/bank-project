import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";

  import styles from './styles'

const Validate = () => {
    return (
        <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/validateImage.png")}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>VALIDATE ACCOUNT</Text>
        <Text>Check your email address and enter the code we sent you to validate your account</Text>
           <View style={styles.inputContainer}>
              <TextInput style={styles.input}/>
           </View>
           
        <View style={styles.loginButton}>
          <TouchableOpacity activeOpacity={0.2}>
            <Text style={styles.loginStyle}>Validate</Text>
          </TouchableOpacity>
        </View>

          <View style={styles.lowText}>
            <Text>Did not receive any code?</Text>
              <Text style={{ color: "#4A47A3" }}>Resend code</Text>
          </View>

      </View>
    </View>
    )
}

export default Validate
