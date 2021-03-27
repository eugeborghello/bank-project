import axios from "axios";
import React, { useState, FC } from "react";
import { Appbar } from "react-native-paper";
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {Picker} from '@react-native-picker/picker';

import { REACT_APP_BACKEND_API_URL } from "@env";

const Recharge: FC = () => {
	const URL = `${REACT_APP_BACKEND_API_URL}/users`;
	const navigation = useNavigation();

	const [error, setError] = useState<string>("");
	const [inputs, setInputs] = useState({
		cardNumber: "",
		expire: "",
		amount: "",
		account: "",
		securityCode: "",
		bank: "",
		cardName: "",
		type: "",
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
			<Appbar.Header style={{ backgroundColor: "#4a47a3" }}>
				<Appbar.BackAction onPress={() => navigation.navigate("Menu")} />
			</Appbar.Header>
			<ScrollView>
				<View style={styles.root}>
					<Text style={styles.title}>Recharge money</Text>

					<View style={styles.mercado}>
						<Image
							style={styles.mercadoLogo}
							source={require("../../assets/images/mercado.png")}
						/>
					</View>

					<View>
						<Picker
							selectedValue={inputs.account}
							onValueChange={(itemValue) => handleChange(itemValue, "account")}
						>
							<Picker.Item label="Select account" value="Select account" />
							<Picker.Item label="US DOLLARS" value="US DOLLARS" />
							<Picker.Item label="ARG PESO" value="ARG PESO" />
						</Picker>
					</View>
					<View>
						<Picker
							selectedValue={inputs.bank}
							onValueChange={(itemValue) => handleChange(itemValue, "bank")}
						>
							<Picker.Item label="Select bank" value="Select bank" />
							<Picker.Item label="BANCO NACION" value="BANCO NACION" />
							<Picker.Item label="BANCO SANTANDER" value="BANCO SANTANDER" />
							<Picker.Item label="BANCO GALICIA" value="BANCO GALICIA" />
						</Picker>
					</View>
					<View>
						<Picker
							selectedValue={inputs.type}
							onValueChange={(itemValue) => handleChange(itemValue, "type")}
						>
							<Picker.Item
								label="Select document type"
								value="Select document type"
							/>
							<Picker.Item label="DNI" value="DNI" />
							<Picker.Item label="CÉDULA" value="CÉDULA" />
							<Picker.Item label="OTRO" value="OTRO" />
						</Picker>
					</View>

					<View style={styles.container}>
						<View style={styles.inputsCard}>
							<Text>Card Name</Text>
							<TextInput
								placeholder="APRO"
								style={styles.inputs}
								onChangeText={(value) => handleChange(value, "cardName")}
								value={inputs.cardName}
							/>
						</View>
						<View style={styles.inputsCode}>
							<Text>Security Code</Text>
							<TextInput
								placeholder="123"
								style={styles.inputs}
								onChangeText={(value) => handleChange(value, "securityCode")}
								value={inputs.securityCode}
							/>
						</View>
					</View>

					<View style={styles.container}>
						<View style={styles.inputsCard}>
							<Text>Card Number</Text>
							<TextInput
								placeholder="5031 7557 3453 0604"
								style={styles.inputs}
								onChangeText={(value) => handleChange(value, "cardNumber")}
								value={inputs.cardNumber}
							/>
						</View>
						<View style={styles.inputsCode}>
							<Text>Expire date</Text>
							<TextInput
								placeholder="MM/YY"
								style={styles.inputs}
								onChangeText={(value) => handleChange(value, "expire")}
								value={inputs.expire}
							/>
						</View>
					</View>

					<View style={styles.amount}>
						<Text>Amount</Text>
						<TextInput
							placeholder="$50"
							style={styles.inputAmount}
							onChangeText={(value) => handleChange(value, "amount")}
							value={inputs.amount}
						/>
						<Text style={{ fontSize: 10, color: "orange", fontStyle: "italic", fontWeight: 'bold' }}>
							Minimum $50
						</Text>
					</View>

					<Text>{error && error}</Text>

					<View style={styles.rechargeButton}>
						<TouchableOpacity activeOpacity={0.2} onPress={handleConfirm}>
							<Text style={styles.rechargeStyles}>Recharge</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default Recharge;
