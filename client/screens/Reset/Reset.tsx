import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from '../../assets/colors/colors.js';
import Icon from 'react-native-vector-icons/Entypo';
import image from '../../assets/images/PasswordReset.png';
import axios from 'axios';
// import { REACT_APP_BACKEND_API_URL } from "react-native-dotenv";
import { useForm, Controller } from 'react-hook-form';

const REACT_APP_BACKEND_API_URL = 'http://192.168.0.156:3001';

export interface User {
  resetCode: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  dni: number;
}

export default function Reset({ navigation }) {
  const [errortext, setErrortext] = useState('');

  const { control, handleSubmit, errors } = useForm();

  const handleSubmitPress = (data: any) => {
    console.log(REACT_APP_BACKEND_API_URL);
    axios
      .patch(
        `${
          REACT_APP_BACKEND_API_URL || 'http://192.168.0.156:3001'
        }/users/forgot`,
        {
          userEmail: data.userEmail,
        }
      )

      .then((user: any) => {
        // console.log("soy------>", user);
        // console.log("soy------>", data.userEmail);
        axios
          .post(
            `${
              REACT_APP_BACKEND_API_URL || 'http://192.168.0.156:3001'
            }users/email`,
            {
              name: user.data.user.name + ' ' + user.data.user.lastName,
              subject: 'Recover your Veski account',
              date: '01/01/2021',
              code: user.data.user.resetCode,
              email: data.userEmail,
            }
          )

          .then((mail: any) => {
            let message = 'Email sent. Check your email';

            setErrortext(message);
            //redirigir al componente Reset2
            // navigation.navigate("Reset2");
            console.log('REDIRECT');
          })
          .catch((error) => {
            setErrortext(error);
          });
      })
      .catch((err) => {
        setErrortext(err.response.data.message);
      });
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: '80%',
          top: -100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={image} style={image} />
      </View>

      <View style={{ width: '80%' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>Forgot</Text>
          <Text style={styles.title2}>password ?</Text>
          <Text style={styles.text}>
            Don’t worry! It happens. Please enter the email address associated
            with your account. You will receive an email with instructions.
          </Text>
        </View>

        <Controller
          control={control}
          render={({ onChange, value }) => {
            return (
              <>
                {/* <Icon name="email" size={18} style={styles.icon} /> */}
                <TextInput
                  value={value}
                  onChangeText={(value) => onChange(value)}
                  placeholder='Email'
                  style={styles.input}
                />
              </>
            );
          }}
          name='userEmail'
          rules={{
            required: true,
            pattern: {
              value: /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i,
              message: 'invalid email',
            },
          }}
          defaultValue=''
        />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => console.log('esto puse')}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  image: {
    position: 'relative',
  },
  title: {
    top: -45,
    fontSize: 26,
    color: colors.textLight,
    fontFamily: 'Roboto_500Medium',
    textTransform: 'uppercase',

    lineHeight: 30,
    justifyContent: 'center',
  },
  title2: {
    top: -44,
    fontSize: 26,
    color: colors.textLight,
    fontFamily: 'Roboto_500Medium',
    textTransform: 'uppercase',

    lineHeight: 30,
    justifyContent: 'center',
  },
  text: {
    top: -25,
    fontSize: 14,
    color: colors.textDark,
    fontFamily: 'Roboto_400Regular',
    lineHeight: 14,
  },
  input: {
    width: '80%',
    borderBottomColor: colors.textInput,
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 10,
    top: -7,
  },

  sendButton: {
    justifyContent: 'center',
    backgroundColor: colors.buttonViolet,
    height: 41,

    borderRadius: 7,
  } as const,

  sendButtonText: {
    fontSize: 15,
    color: colors.textGreyLight,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto_500Medium',
  },
  emailInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.textInput,
  },
});
