const frase = "It is the number that identifies your VESKI account. It helps you receive or send money to or from any bank account or virtual wallet. It is credited at the moment."

import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, FlatList, TouchableHighlight,View } from "react-native";
import styles from './styles'





export default function PersonalInfo ()  {
  
  let datos={
    CBU : "12345678901234567890",
    Nickname : " OTRODESANTAFE.VESKI  ",
    
  
  
  }

return(
  <View style={styles.container}>
    <Text style={styles.title}>
      CBU (Unique Bank Key)
    </Text>
    <Text>
   {frase}
    </Text>
    {/*                              <CBU>  */}
        <View> 
    <Text  style={styles.principal}>
      CBU
    </Text>

    <Text style={styles.second} >
      {datos.CBU}
    </Text>
         </View>
    
    <View> 
    {/*                             <NICKNAME>  */}
    <Text style={styles.principal} >
    Nickname
    </Text>
    <Text  style={styles.second}>
      {datos.Nickname}
    </Text>
    
        </View>
   
   
  </View>
)}
