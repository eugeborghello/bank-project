import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconPass from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.root}>
      <Image source={require("../../assets/images/login.png")} />
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <View style={styles.emailInput}>
          <Icon name='email' size={15} color='#000' />
          <TextInput
            placeholder='Email'
            style={styles.input}
            /*  onChangeText={handleInput}
                value={email} */
          />
        </View>
        <View style={styles.emailInput}>
          <IconPass name='lock-outline' size={15} color='#000' />
          <TextInput placeholder='Password' style={styles.input} />
        </View>


        {/* Login button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2} /* onPress={()=>{}} */
        >
          <Button color='#413C69' title='Log in' onPress={()=>{}}/>
        </TouchableOpacity>
        <Text>or</Text>
        {/* Google button */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonGStyle}
            activeOpacity={0.2} /* onPress={()=>{}} */
          >
            <Image
              source={require("../../assets/icons/google.png")}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>Login with Google</Text>
          </TouchableOpacity>
          <View style={styles.lowText}>
            <Text>Not a member?</Text>
            <TouchableOpacity /* onPress={() => navigation.navigate('Register')} */>
								<Text>Register</Text>
						</TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
