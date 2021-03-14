import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function Register() {

    const initialState = {
        email: '',
        password: '',
        repeatPass: ''
    }

    const [datos, setDatos] = useState(initialState)

    const handleChange = (value: string, name: string): void => {
        setDatos({ ...datos, [name]: value })
    }

    const user = {
        email: datos.email,
        password: datos.password
    }

    const createNewUser = () => {
        if (!datos.email || !datos.password || !datos.repeatPass) { return alert("Por favor ingresa los datos requeridos") }
        if (datos.password === datos.repeatPass) {
            //En lugar de localhost, debe ir la dirección ip de cada uno. Sino tira network error
            axios.post('http://192.168.0.10:3001/user', user)
                .then(user => {
                    console.log(user);
                    alert("El usuario fue creado con éxito");
                    setDatos(initialState);

                })
                .catch(error => console.log(error))
        } else {
            return alert("Las contraseñas ingresadas no coinciden")
        }

    }



    return (
        <View style={styles.registerForm}>

            <Image style={styles.image}
                source={require('../assets/register.png')}>
            </Image>

            <View style={styles.registerContainer}>
                <Text style={styles.header}> REGISTER </Text>

                <View style={styles.emailContent}>
                    <Entypo name="email" style={styles.icon} />
                    <TextInput
                        style={styles.textinput} placeholder="Email"
                        underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "email")}
                    />
                </View>

                <View style={styles.emailContent}>
                    <AntDesign name="lock1" style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Password"
                        secureTextEntry={true} underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "password")}
                    />
                </View>

                <View style={styles.emailContent}>
                    <AntDesign name="lock1" style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Repeat password"
                        secureTextEntry={true} underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "repeatPass")}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Button
                        title="Register"
                        onPress={createNewUser}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({
    registerForm: {
        flex: 1,
        alignSelf: 'center',
<<<<<<< HEAD
        width:'100%'
=======
        width: '100%'
>>>>>>> 77b95e2899463f2faca298789d8894fcb0f9bccd
    },
    image: {
        flex: 1,
        width: '100%',
<<<<<<< HEAD
        height: '100%',       
=======
        height: '100%',
>>>>>>> 77b95e2899463f2faca298789d8894fcb0f9bccd

    },
    registerContainer: {
        flex: 1,
    },

    header: {
        textAlign:'center',
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
        width: 24,
        height: 24,
        color: 'rgb(112, 159, 176)',
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
