import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
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
		console.log(REACT_APP_BACKEND_API_URL);
		try {
			const user = await axios.patch(`${REACT_APP_BACKEND_API_URL}/users/forgot`, {
				userEmail: data.userEmail,
			});

			const mail = await axios.post(`${REACT_APP_BACKEND_API_URL}/users/email`, {
				name: user.data.user.name + " " + user.data.user.lastName,
				subject: "Recover your Veski account",
				text: "Here's your code to reset your password: ",
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
				<View style={styles.bricking}>
					<Text style={styles.title}>Forgot</Text>
					<Text style={styles.title2}>password ?</Text>
					<Text style={styles.text}>
						Don’t worry! It happens. Please enter the email address associated with your
						account. You will receive an email with instructions.
					</Text>
				</View>

				<Controller
					control={control}
					render={({ onChange, onBlur, value }) => {
						return (
							<>
								<View style={{ position: "absolute", top: 13 }}>
									<Icon name="email" size={18} style={styles.icon} />
									<TextInput
										onBlur={onBlur}
										value={value}
										onChangeText={(value) => onChange(value)}
										placeholder="Email"
										autoFocus={true}
										style={styles.input}
									/>
								</View>
							</>
						);
					}}
					name="userEmail"
					rules={{
						required: true,
						pattern: {
							value: /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i,
							message: "invalid email",
						},
					}}
					defaultValue=""
				/>
				{/* {errors.userEmail && (
					<View style={{ position: "absolute", top: 30 }}>
						<Text
							style={{
								color: "#D53051",
								fontSize: 13,
								textTransform: "uppercase",
								marginRight: 5,
								top: 40,
								fontFamily: "Roboto_500Medium",
							}}
						>
							{errors.userEmail.message || "Try Again"}
						</Text>
						<Icon name={"block"} size={18} color={"#D53051"} />
					</View>
				)} */}

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
		top: -10,
	},
	image: {
		top: 100,
		position: "relative",
	},
	bricking: {
		top: -35,
	},
	title: {
		top: -67,
		fontSize: 26,
		color: colors.textLight,
		fontFamily: "Roboto_500Medium",
		textTransform: "uppercase",

		lineHeight: 30,
		justifyContent: "center",
	},
	title2: {
		top: -69,
		fontSize: 26,
		color: colors.textLight,
		fontFamily: "Roboto_500Medium",
		textTransform: "uppercase",

		lineHeight: 30,
		justifyContent: "center",
	},
	text: {
		top: -59,
		fontSize: 14,
		color: colors.textDark,
		fontFamily: "Roboto_400Regular",
		lineHeight: 14,
	},
	input: {
		width: 270,
		borderBottomColor: colors.textInput,
		borderBottomWidth: 1,
		padding: 5,
		// marginTop: 10,

		left: 20,
	},

	sendButton: {
		top: -40,
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
		// width: "100%",
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
	},
	icon: {
		color: colors.textInput,
		position: "absolute",
		top: 11,
	},
});
