import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Register() {
    return (
        <View style={styles.registerForm}>

            <Image style={styles.image}
            source={ require('../assets/register.png')}> 
            </Image>

            <View style={styles.registerContainer}>  
                <Text style={styles.header}> REGISTER </Text>

                <View style={styles.emailContent}>
                    <Entypo name="email" style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Email" 
                    underlineColorAndroid={'transparent'}></TextInput>
                </View>

                <View style={styles.emailContent}>
                    <AntDesign name="lock1" style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Password" 
                    secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
                </View>

                <View style={styles.emailContent}>
                    <AntDesign name="lock1" style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Repeat password" 
                    secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Register</Text>
                </TouchableOpacity>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    registerForm: {
        flex: 1,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,       

    },
    registerContainer: {
        flex: 1,
    },
    
    header: {
        flex: 1,
        fontSize: 24,
        color: 'rgb(74, 71, 163)',
        marginBottom: 40,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    emailContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width:24,
        height:24,
        color:  'rgb(112, 159, 176)',
    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'rgb(112, 159, 176)',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingLeft: 10,
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 30,
        
    },
    btntext: {
        color: 'rgb(167, 197, 235)',
        fontWeight: 'bold',
    }
})
