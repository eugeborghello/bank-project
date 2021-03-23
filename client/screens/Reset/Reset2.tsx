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
			console.log(user);

			const mail = await axios.post(`${REACT_APP_BACKEND_API_URL}/users/email`, {
				name: user.data.user.firstName + " " + user.data.user.lastName,
				subject: "You have changed your password Successfully",
				text:
					"Congratulations, you have changed your password, if you have any other problem, please contact support ",
				email: data.userEmail,
				code: " ",
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
				<View style={{ flexDirection: "column", top: -50 }}>
					<Text style={styles.title}>{REACT_APP_BACKEND_API_URL}</Text>
					<Text style={styles.text}>
						And in a few seconds you will be able to access to your wallet.
					</Text>
				</View>
				<View>
					<Controller
						control={control}
						render={({ onChange, value }) => {
							return (
								<>
									<View style={{ position: "absolute", top: -90 }}>
										<Icon name="key" size={18} style={styles.icon} />
										<TextInput
											value={value}
											onChangeText={(value) => onChange(value)}
											placeholder="Reset code"
											style={styles.input}
										/>
									</View>
								</>
							);
						}}
						name="resetCode"
						rules={{ required: true }}
						defaultValue=""
					/>
					{errors.resetCode && (
						<View style={{ position: "absolute", top: -115, left: 210 }}>
							<Text
								style={{
									color: "#D53051",
									fontSize: 13,
									textTransform: "uppercase",
									marginRight: 5,
									top: 31,
									fontFamily: "Roboto_500Medium",
									padding: 5,
									// marginTop: 10,

									left: 20,
								}}
							>
								{"Required"}
							</Text>
							<Icon name={"block"} size={18} color={"#D53051"} style={{ top: 6 }} />
						</View>
					)}
					<Controller
						control={control}
						render={({ onChange, value }) => {
							return (
								<>
									<View style={{ position: "relative", top: -60 }}>
										<Icon name="email" size={18} style={styles.icon} />
										<TextInput
											value={value}
											onChangeText={(value) => onChange(value)}
											placeholder="Email"
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
								message: "invalid Email",
							},
						}}
						defaultValue=""
					/>
					{errors.userEmail && (
						<View style={{ position: "absolute", top: -84, left: 210 }}>
							<Text
								style={{
									color: "#D53051",
									fontSize: 13,
									textTransform: "uppercase",
									marginRight: 5,
									top: 31,
									fontFamily: "Roboto_500Medium",
									padding: 5,
									// marginTop: 10,

									left: 20,
								}}
							>
								{"Invalid"}
							</Text>
							<Icon name={"block"} size={18} color={"#D53051"} style={{ top: 6 }} />
						</View>
					)}

					<Controller
						control={control}
						render={({ onChange, value }) => {
							return (
								<>
									<View style={{ position: "relative", top: -60 }}>
										<Icon
											name="arrow-bold-right"
											size={18}
											style={styles.icon}
										/>
										<TextInput
											value={value}
											onChangeText={(value) => onChange(value)}
											secureTextEntry={true}
											placeholder="New Password"
											style={styles.input}
										/>
									</View>
								</>
							);
						}}
						name="newPass"
						rules={{
							required: true,
							pattern: {
								value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
								message: "invalid password",
							},
						}}
						defaultValue=""
					/>
					{errors.newPass && (
						<View style={{ position: "absolute", bottom: 79, left: 210 }}>
							<Text
								style={{
									color: "#D53051",
									fontSize: 13,
									textTransform: "uppercase",
									marginRight: 5,
									top: 31,
									fontFamily: "Roboto_500Medium",
									padding: 5,
									// marginTop: 10,

									left: 20,
								}}
							>
								{errors.newPass.message || "Required"}
							</Text>
							<Icon name={"block"} size={18} color={"#D53051"} style={{ top: 6 }} />
						</View>
					)}
				</View>
				<View style={{ top: -50, marginTop: 20 }}>
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
		top: -10,
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
		top: -35,
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
		position: "absolute",
		top: 11,
	},
});
