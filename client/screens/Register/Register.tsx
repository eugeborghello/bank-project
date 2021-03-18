import React, { useState } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
} from 'react-native';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconPass from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import styles from "./styles";
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../../redux/Actions/registerAction';
//import  { REACT_APP_BACKEND_API_URL} from "@env";

export default function Register() {

	const dispatch = useDispatch();

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
                    <TouchableOpacity style={styles.button} onPress={()=> dispatch(createUser(datos))}>

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
