import axios from "axios";
import React, { useState, useContext } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import HandleDrawer from "../../components/Nav/HandleDrawer";
import { Picker } from "@react-native-picker/picker";

import { REACT_APP_BACKEND_API_URL } from "@env";

const Login = () => {
	const URL = `${REACT_APP_BACKEND_API_URL}/users`;
	const dispatch = useDispatch();

	const [selectedLanguage, setSelectedLanguage] = useState();

	const [error, setError] = useState<string>("");
	const [inputs, setInputs] = useState({
		card: "",
		expire: "",
		amount: "",
		account: ""
	});

	// input handlers
	const handleChange = (value: string, name: string): void => {
		setInputs({ ...inputs, [name]: value });
	};

	const handleConfirm = () => {
		console.log("hola");
	};

	return (
		<>
			<View style={styles.root}>
				<HandleDrawer />
				<Text style={styles.title}>RECHARGE MONEY</Text>

				<View style={styles.containerA}>
					<Picker 
					selectedValue={inputs.account}
					onValueChange={(itemValue, itemIndex) => handleChange(itemValue, "account")}
					>
					    
						<Picker.Item label="US DOLLARS" value="US DOLLARS" />
						<Picker.Item label="ARG PESO" value="ARG PESO" />
					</Picker>
				</View>

				<View style={styles.container}>
					<View>
						<Text>Card number</Text>
						<TextInput
							placeholder="1234 5678 1234 5678"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "card")}
							value={inputs.card}
						/>
					</View>
					<View>
						<Text>Expire date</Text>
						<TextInput
							placeholder="MM/YY"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "expire")}
							value={inputs.expire}
						/>
					</View>
				</View>
				<View style={styles.containerA}>
					<Text>Amount</Text>
					<TextInput
						placeholder="$50"
						style={styles.input}
						secureTextEntry={true}
						onChangeText={(value) => handleChange(value, "amount")}
						value={inputs.amount}
					/>
					<Text style={{ fontSize: 10, color: "orange" }}>Minimum $50</Text>
				</View>

				<Text>{error && error}</Text>

				<View style={styles.mercado}>
				<TouchableOpacity>
					<Image style={styles.mercadoLogo} source={require("../../assets/images/mercado.png")} />
				</TouchableOpacity>
				</View>

				<View style={styles.loginButton}>
					<TouchableOpacity activeOpacity={0.2} onPress={handleConfirm}>
						<Text style={styles.loginStyle}>Recharge</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default Login;
