import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors.js";
import Icon from "react-native-vector-icons/Entypo";
import image from "../../assets/images/PasswordReset.png";
import axios from "axios";
import { REACT_APP_BACKEND_API_URL } from "@env";
import { useForm, Controller } from "react-hook-form";

export interface User {
	resetCode: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
	dni: number;
}

export default function Reset({ navigation }) {
	const [errortext, setErrortext] = useState("");

	const { control, handleSubmit, errors } = useForm();

	const handleSubmitPress = async (data: any) => {
		try {
			const user = await axios.patch(`${REACT_APP_BACKEND_API_URL}/users/forgot`, {
				userEmail: data.userEmail,
			});

			const mail = await axios.post(`${REACT_APP_BACKEND_API_URL}/users/email`, {
				name: user.data.user.name + " " + user.data.user.lastName,
				subject: "Recover your Veski account",
				date: "01/01/2021",
				code: user.data.user.resetCode,
				email: data.userEmail,
			});

			let message = "Email sent. Check your email";

			setErrortext(message);
			//redirigir al componente Reset2
			navigation.navigate("Reset2");
			console.log("Redirect Successful");
		} catch (error) {
			setErrortext(error);
		}
	};

	return (
		<View style={styles.wrapper}>
			<View
				style={{
					width: "80%",
					top: -100,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image source={image} style={image} />
			</View>

			<View style={{ width: "80%" }}>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<Text style={styles.title}>Forgot</Text>
					<Text style={styles.title2}>password ?</Text>
					<Text style={styles.text}>
						Don’t worry! It happens. Please enter the email address associated with your
						account. You will receive an email with instructions.
					</Text>
				</View>

				<Controller
					control={control}
					render={({ onChange, value }) => {
						return (
							<>
								<Icon name="email" size={18} style={styles.icon} />
								<TextInput
									value={value}
									onChangeText={(value) => onChange(value)}
									placeholder="Email"
									style={styles.input}
								/>
							</>
						);
					}}
					name="userEmail"
					rules={{
						required: true,
						pattern: {
							value: /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i,
							message: "Invalid email please try again",
						},
					}}
					defaultValue=""
				/>
				{errors.userEmail && (
					<View>
						<Text
							style={{
								color: "#D53051",
								fontSize: 13,
								textTransform: "uppercase",
								marginRight: 5,
								fontFamily: "Roboto_500Medium",
							}}
						>
							{errors.userEmail.message || "Required"}
						</Text>
						<Icon name={"block"} size={18} color={"#D53051"} />
					</View>
				)}

				<View style={{ marginTop: 20 }}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.sendButton}
						onPress={handleSubmit(handleSubmitPress)}
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
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.background,
		flexDirection: "column",
	},
	image: {
		position: "relative",
	},
	title: {
		top: -45,
		fontSize: 26,
		color: colors.textLight,
		fontFamily: "Roboto_500Medium",
		textTransform: "uppercase",

		lineHeight: 30,
		justifyContent: "center",
	},
	title2: {
		top: -44,
		fontSize: 26,
		color: colors.textLight,
		fontFamily: "Roboto_500Medium",
		textTransform: "uppercase",

		lineHeight: 30,
		justifyContent: "center",
	},
	text: {
		top: -25,
		fontSize: 14,
		color: colors.textDark,
		fontFamily: "Roboto_400Regular",
		lineHeight: 14,
	},
	input: {
		width: "80%",
		borderBottomColor: colors.textInput,
		borderBottomWidth: 1,
		padding: 5,
		marginTop: 10,
		top: -7,
	},

	sendButton: {
		justifyContent: "center",
		backgroundColor: colors.buttonViolet,
		height: 41,

		borderRadius: 7,
	} as const,

	sendButtonText: {
		fontSize: 15,
		color: colors.textGreyLight,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Roboto_500Medium",
	},
	emailInput: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		color: colors.textInput,
	},
});
