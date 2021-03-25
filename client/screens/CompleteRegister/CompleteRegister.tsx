import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Address from "react-native-vector-icons/SimpleLineIcons";
import Id from "react-native-vector-icons/AntDesign";
import { REACT_APP_BACKEND_API_URL } from "@env";
import { RootStateOrAny, useSelector } from "react-redux";

import styles from "./styles";
const CompleteRegister = (props) => {
	const URL = `${REACT_APP_BACKEND_API_URL}`;
	const token = useSelector((state: RootStateOrAny) => state.user.currentUser[0].tokens[0].token);
	const [error, setError] = useState<string>("");
	const [inputs, setInputs] = useState({
		name: "",
		lastName: "",
		address: "",
		id: "",
	});

	const userId = useSelector((state: RootStateOrAny) => state.user.currentUser[0]._id);

	const handleChange = (value: string, name: string): void => {
		setInputs({ ...inputs, [name]: value });
	};

	const handleConfirm = () => {
		if (!inputs.name || !inputs.address || !inputs.lastName || !inputs.id) {
			setError("All fields are required");
			return false;
		}

		axios
			.patch(`${URL}/users/${userId}`, inputs, {
				headers: {
					Authorization: `${token}`,
				},
			})
			.then((res) => {
				console.log(res);
				axios.post(`${URL}/accounts/${userId}`);
				setInputs({
					name: "",
					lastName: "",
					address: "",
					id: "",
				});
				Alert.alert("Register completed successfully", ".", [
					{ text: "OK", onPress: () => props.navigation.navigate("Home") },
				]);
			})
			.catch((err) => {
				console.log(err);
				setError("Something went wrong. Try again later");
			});
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require("../../assets/images/lastStepImage.png")}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.title}>COMPLETE REGISTRATION</Text>
					<View style={styles.emailInput}>
						<Icon name="person-outline" size={18} color="grey" />
						<TextInput
							placeholder="Name"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "name")}
							value={inputs.name}
						/>
					</View>
					<View style={styles.emailInput}>
						<Icon name="person-outline" size={18} color="grey" />
						<TextInput
							placeholder="Last Name"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "lastName")}
							value={inputs.lastName}
						/>
					</View>
					<View style={styles.emailInput}>
						<Address name="location-pin" size={18} color="grey" />
						<TextInput
							placeholder="Address"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "address")}
							value={inputs.address}
						/>
					</View>
					<View style={styles.emailInput}>
						<Id name="idcard" size={18} color="grey" />
						<TextInput
							placeholder="ID"
							style={styles.input}
							onChangeText={(value) => handleChange(value, "id")}
							value={inputs.id}
						/>
					</View>
					<Text style={styles.error}>{error && error}</Text>
					<View style={styles.loginButton}>
						<TouchableOpacity activeOpacity={0.2} onPress={handleConfirm}>
							<Text style={styles.loginStyle}>Confirm</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default CompleteRegister;
