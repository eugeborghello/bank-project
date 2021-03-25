import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";
import styles from "./styles";

const Historial = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Link to="/Home">
                <AntDesign name="arrowleft" size={24} color="black" />
                </Link>
            </View>

            <View style={styles.title}>
                <Text style={{ fontFamily: "Roboto_700Bold", color: '#413C69', fontSize: 30,}}> Transactions history </Text>
            </View>
            
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                <Text style={{fontFamily: "Roboto_400Regular", color: "#4A47A3",  fontSize: 15,}}> Recent: </Text>
                </View>

                <View style={styles.headerRight}>
                <Text style={{fontFamily: "Roboto_400Regular", color: "#4A47A3",  fontSize: 15,}}> Statistics </Text>
                </View>
            </View>
            <View style={styles.card}> 
                    <View style={styles.iconTextContainer}>
                        <TouchableOpacity  
                            style={styles.icon}>  
                            <AntDesign name="arrowup" size={24} color="black" />    

                            <View style={styles.text}>
                                <Text style={styles.cardText}> Henry </Text>
                                <Text style={styles.cardText2}> Today 15.30hs </Text>
                            </View>             
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.amount}> 
                        <Text style={{fontFamily: "Roboto_500Medium", color: "#4A47A3", }} > USD450 </Text>
                    </View>
                    
                </View>

                <View style={styles.card}> 
                    <View style={styles.iconTextContainer}>
                        <TouchableOpacity  
                            style={styles.icon}>  
                            <AntDesign name="arrowup" size={24} color="black" />    

                            <View style={styles.text}>
                                <Text style={styles.cardText}> Henry </Text>
                                <Text style={styles.cardText2}> Today 11.30hs </Text>
                            </View>             
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.amount}> 
                        <Text style={{fontFamily: "Roboto_500Medium", color: "#4A47A3", }} > USD150 </Text>
                    </View>
                    
                </View>
            

                <View style={styles.card}> 
                    <View style={styles.iconTextContainer}>
                        <TouchableOpacity  
                            style={styles.icon}>  
                            <AntDesign name="arrowup" size={24} color="black" />    

                            <View style={styles.text}>
                                <Text style={styles.cardText}> Henry </Text>
                                <Text style={styles.cardText2}> Yesterday 11.30hs </Text>
                            </View>             
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.amount}> 
                        <Text style={{fontFamily: "Roboto_500Medium", color: "#4A47A3", }} > USD50 </Text>
                    </View>
                    
                </View>

                <View style={styles.card}> 
                    <View style={styles.iconTextContainer}>
                        <TouchableOpacity  
                            style={styles.icon}>  
                            <AntDesign name="arrowup" size={24} color="black" />    

                            <View style={styles.text}>
                                <Text style={styles.cardText}> Henry </Text>
                                <Text style={styles.cardText2}> Yesterday 10.00hs </Text>
                            </View>             
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.amount}> 
                        <Text style={{fontFamily: "Roboto_500Medium", color: "#4A47A3", }} > USD45 </Text>
                    </View>
                    
                </View>

               
                
                

           
            



        </View>
    )
};

export default Historial;