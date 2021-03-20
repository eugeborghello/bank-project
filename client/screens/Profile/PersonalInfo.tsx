import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, FlatList, TouchableHighlight,View } from "react-native";
import styles from './styles'





export default function PersonalInfo ()  {
  
  let datos={
    email : "otro@gmail.com",
    adress : " Comarca  ",
    postalCode: "5588",
    location:"New York",
    province: "Santa Fe"
  
  
  }

return(
  <View style={styles.container}>
    <Text style={styles.title}>
      Personal Information
    </Text>
    {/*                              <EMAIL>  */}
        <View> 
    <Text  style={styles.principal}>
      Email
    </Text>

    <Text style={styles.second} >
      {datos.email}
    </Text>
         </View>
    
    <View> 
    {/*                             <ADRESS>  */}
    <Text style={styles.principal} >
      Adress
    </Text>
    <Text  style={styles.second}>
      {datos.adress}
    </Text>
    
        </View>
    <View> 
    {/*                         <POSTAL CODE>  */}
    <Text  style={styles.principal}>
    Postal Code
    </Text>
    <Text  style={styles.second}>
      {datos.postalCode}
    </Text>
        </View>
    <View> 
     {/*                         <LOCATION>  */}
    <Text style={styles.principal} >
      Location
    </Text>
    <Text style={styles.second} >
      {datos.location}
    </Text>
        </View>
    <View> 

     {/*                          <PROVINCE>  */}
    <Text style={styles.principal}>
    Province
    </Text>
    <Text style={styles.second} >
      {datos.province}
    </Text>
        </View>
   
  </View>
)}

