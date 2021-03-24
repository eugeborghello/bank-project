import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import Icon from "react-native-vector-icons/Entypo";
import image from "../../assets/images/PasswordReset.png";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { REACT_APP_BACKEND_API_URL } from "@env";

export default function Reset2({ navigation, route: { params } }) {
	const [errortext, setErrortext] = useState("");

	const { control, handleSubmit, errors } = useForm();

	const [hidePass, setHidePass] = useState(true);

	const onPress = () => setHidePass((prevState) => !prevState);

	const handleSubmitPress = async (data: any) => {
		console.log("data", data);

		try {
			const user = await axios.patch(
				`${REACT_APP_BACKEND_API_URL}/users/resetpass`,

				{
					resetCode: data.resetCode,
					userEmail: data.userEmail,
					newPass: data.newPass,
				},
			);
			const mail = await axios.post(`${REACT_APP_BACKEND_API_URL}/users/email`, {
				name: user.data.user.firstName + " " + user.data.user.lastName,
				subject: "You have changed your password Successfully",
				// date: "01/01/2021",
				text:
					"Congratulations, you have changed your password, if you have any other problem, please contact support",
				email: data.userEmail,
			});

			console.log(mail);

			let message = "Email sent. Check your email";

			setErrortext(message);

			console.log("Redirection to Home has Succeed");
			navigation.navigate("Login");
		} catch (error) {
			setErrortext(error);
		}
	};

	return (
		<View style={styles.wrapper}>
			<View
				style={{ width: "80%", top: -100, justifyContent: "center", alignItems: "center" }}
			>
				<Image source={image} style={image} />
			</View>

			<View style={{ width: "80%" }}>
				<View style={{ flexDirection: "column" }}>
					<Text style={styles.title}>Complete the information </Text>
					<Text style={styles.text}>
						And in a few seconds you will be able to access to your wallet.
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
									placeholder="Reset code"
									style={styles.input}
								/>
							</>
						);
					}}
					name="resetCode"
					rules={{ required: true }}
					defaultValue=""
				/>

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
							message: "invalid Email",
						},
					}}
					defaultValue=""
				/>

				<Controller
					control={control}
					render={({ onChange, value }) => {
						return (
							<>
								<Icon name="email" size={18} style={styles.icon} />
								<TextInput
									value={value}
									onChangeText={(value) => onChange(value)}
									placeholder="New Password"
									style={styles.input}
								/>
							</>
						);
					}}
					name="newPass"
					rules={{
						required: true,
						// pattern: {
						// 	value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
						// 	message: "invalid password",
						// },
					}}
					defaultValue=""
				/>

				<View style={{ marginTop: 20 }}>
					<TouchableOpacity
						onPress={handleSubmit(handleSubmitPress)}
						style={styles.sendButton}
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
