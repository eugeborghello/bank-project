import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "@react-navigation/native";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconPass from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import {  useDispatch } from 'react-redux';
import HandleDrawer from "../../components/Nav/HandleDrawer";



import { REACT_APP_BACKEND_API_URL } from "@env"; 

const Login = (props) => {
  const URL = `${REACT_APP_BACKEND_API_URL}/users`;
  const dispatch = useDispatch();

	const [error, setError] = useState<string>("");
	const [inputs, setInputs] = useState({
		email: "",
		password: ""
	});

	// input handlers
	const handleChange = (value: string, name: string): void => {
        setInputs({ ...inputs, [name]: value })
    }

    // API call
    const handleLogin = () => {
     if (inputs.email === "" || inputs.password === "") {
      setError("Email and Password cannot be empty");
      return false;
    }
     if (inputs.email) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(inputs.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }
      if (inputs.password.length) {
      var pattern = new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      );
      if (!pattern.test(inputs.password)) {
        setError(
          "Password must contain minimum eight characters, at least one number and one special character"
        );
        return false;
      }
    }  
    axios
      .post(`http://${URL}/login`, {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
		let user = res.data.response
        setError("");
        setInputs({
			email: "",
		    password: ""
		})
        Alert.alert(
          "Succesfully logged",
          ".",
          [
            { text: "OK", onPress: () =>  props.navigation.navigate('Menu')}
          ]
        );
        return dispatch({
          type: 'LOGIN',
          payload: user
        })
      })
      .catch(() => {
        setError("User not found");
        return dispatch({
          type: 'LOGOUT',
        })
      });
	  
  };

  return (
    <>
    <View style={styles.root}>
	<HandleDrawer/>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/veski.png")}
        />
      </View>

				<View style={styles.inputContainer}>
					<Text style={styles.title}>LOGIN</Text>
					<View style={styles.emailInput}>
						<Icon name="alternate-email" size={18} color="grey" />
						<TextInput
							placeholder="Email"
							style={styles.input}
							onChangeText={value => handleChange(value, "email")}
                            value={inputs.email}
						/>
					</View>
					<View style={styles.emailInput}>
						<IconPass name="lock-outline" size={18} color="grey" />
						<TextInput
							placeholder="Password"
							style={styles.input}
							secureTextEntry={true}
							onChangeText={value => handleChange(value, "password")}
                            value={inputs.password}
						/>
					</View>

					<Text style={styles.error}>{error && error}</Text>

					{/* Login button */}
					<View style={styles.loginButton}>
						<TouchableOpacity activeOpacity={0.2} onPress={handleLogin}>
							<Text style={styles.loginStyle}>Login</Text>
						</TouchableOpacity>
					</View>

					<Text style={{ margin: 12 }}>or</Text>

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
							<Link to="/Register">
								<Text style={{ color: "#4A47A3" }}>Register</Text>
							</Link>
						</View>

						<View style={styles.lowText2}>
							<Link to="/Reset">
								<Text style={{ color: "#4A47A3" }}>Forgot password?</Text>
							</Link>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};

export default Login;
