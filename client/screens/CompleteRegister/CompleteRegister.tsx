import axios from "axios";
import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Address from "react-native-vector-icons/SimpleLineIcons";
import Id from "react-native-vector-icons/AntDesign";

import styles from "./styles";
const CompleteRegister = () => {
    return (
        <ScrollView>
        <View style={styles.root}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/lastStepImage.png")}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.title}>COMPLETE REGISTRATION</Text>
          <View style={styles.emailInput}>
            <Icon name='person-outline' size={18} color='grey' />
            <TextInput
              placeholder='Name'
              style={styles.input}
              /* onChangeText={handleEmail}
              value={email} */
            />
          </View>
          <View style={styles.emailInput}>
            <TextInput
              placeholder='Last Name'
              style={styles.input}
              /* onChangeText={handleEmail}
              value={email} */
            />
          </View>
          <View style={styles.emailInput}>
            <Address name='location-pin' size={18} color='grey' />
            <TextInput
              placeholder='Address'
              style={styles.input}
              /* onChangeText={handlePassword}
              value={password} */
            />
          </View>
          <View style={styles.emailInput}>
            <Id name='idcard' size={18} color='grey' />
            <TextInput
              placeholder='ID'
              style={styles.input}
              secureTextEntry={true}
              /* onChangeText={handlePassword}
              value={password} */
            />
          </View>
          <View style={styles.loginButton}>
            <TouchableOpacity activeOpacity={0.2}>
              <Text style={styles.loginStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        </ScrollView>
    )
}

export default CompleteRegister
