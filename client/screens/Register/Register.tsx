import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconPass from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
import styles from "./styles";
import  { REACT_APP_BACKEND_API_URL} from "@env";

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
        console.log(REACT_APP_BACKEND_API_URL);
        if (!datos.email || !datos.password || !datos.repeatPass) { return alert("All inputs are required") }
        if (datos.password === datos.repeatPass) {
            //En lugar de localhost, debe ir la dirección ip de cada uno. Sino tira network error
            axios.post(`${REACT_APP_BACKEND_API_URL}/users`, user)
                .then(user => {
                    console.log(user);
                    alert("User was created successfully");
                    setDatos(initialState);

                })
                .catch(error => console.log(error))
        } else {
            return alert("Passwords does not match")
        }

    }



    return (
        <View style={styles.registerForm}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/images/veski.png")}
                />
            </View>

            <View style={styles.registerContainer}>
                <Text style={styles.title}> REGISTER </Text>

                <View style={styles.emailContent}>
                    <Icon name='alternate-email' size={18} color='grey' style={styles.icon} />
                    <TextInput
                        style={styles.textinput} placeholder="Email"
                        underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "email")}
                    />
                </View>

                <View style={styles.emailContent}>
                    <IconPass name='lock-outline' size={18} color='grey' style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Password"
                        secureTextEntry={true} underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "password")}
                    />
                </View>

                <View style={styles.emailContent}>
                    <IconPass name='lock-outline' size={18} color='grey' style={styles.icon} />
                    <TextInput style={styles.textinput} placeholder="Repeat password"
                        secureTextEntry={true} underlineColorAndroid={'transparent'}
                        onChangeText={value => handleChange(value, "repeatPass")}
                    />
                </View>
                {/* Register button */}
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={createNewUser}>

                        <Text style={styles.btntext}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lowText}>
                    <Text>Already have an account?</Text>
                    <Link to='/Login'>
                        <Text style={{ color: "#4A47A3" }}>Login</Text>
                    </Link>
                </View>

            </View>
        </View>

    );
}



