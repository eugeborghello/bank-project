import React, { FC, useState } from "react";
import styles from "./TransferStyles";
import { Text, View, Image, Alert, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Appbar, Avatar, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Dollar from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Fontisto";

const Transfer: FC = () => {
	const navigation = useNavigation();

	const [checkbox, setCheckbox] = useState<string>("arg");

	const handleCheck = (v: string) => {
		setCheckbox(v);
		checkbox === "arg"
			? Alert.alert("Account ARG peso selected")
			: Alert.alert("Account US dollar selected");
	};

	const [transferCbu, setTransferCbu] = useState({
		name: "",
		key: "",
		amount: "",
		description: "",
	});
	const [contacts, setContacts] = useState([
		{
			name: "Sandra Gomez",
			key: "5",
			account: "234406877",
			image:
				"https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
		},
		{
			name: "Jose Fernando",
			key: "6",
			account: "234406877",
			image:
				"https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
		},
		{
			name: "Woody Allen",
			key: "7",
			account: "234406877",
			image:
				"https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
		},
		{
			name: "Sandra Gomez",
			key: "8",
			account: "234406877",
			image:
				"https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
		},
	]);

	const handleChange = (value: string, name: string): void => {
		setTransferCbu({ ...transferCbu, [name]: value });
	};

	return (
		<>
			<Appbar.Header style={{ backgroundColor: "#4a47a3" }}>
				<Appbar.BackAction onPress={() => navigation.navigate("Home")} />
			</Appbar.Header>

			<ScrollView>
				<View style={styles.general}>
					<Text style={styles.title}>TRANSFER</Text>

					<Text style={styles.recentTitle}> Select a contact: </Text>

					<View style={styles.contacts}>
						<ScrollView horizontal={true}>
							<View>
								<TouchableOpacity>
									<Avatar.Icon
										style={styles.addButton}
										icon="account-multiple-plus-outline"
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.contacts}>
								{contacts.map((el) => {
									return (
										<View>
											<TouchableOpacity
												onPress={() => handleChange(el.name, "name")}
												key={el.key}
											>
												<Image
													source={{ uri: el.image }}
													style={styles.avatar}
												/>
												<Text style={styles.contactName}>{el.name}</Text>
											</TouchableOpacity>
										</View>
									);
								})}
							</View>
						</ScrollView>
					</View>
					<View style={styles.content}>
						<View style={styles.inputsContainer}>
							<View>
								<Text style={styles.titleTransfer}>Transfer to:</Text>
								<View style={styles.inputWrapper}>
									<Icon
										style={{ marginTop: 18 }}
										name="person"
										size={18}
										color="grey"
									/>
									<TextInput
										onChangeText={(value) => handleChange(value, "name")}
										value={transferCbu.name}
										style={styles.inputs}
									/>
								</View>
							</View>
							<View>
								<Text style={styles.titleTransfer}>Enter amount:</Text>
								<View style={styles.inputWrapper}>
									<Dollar
										style={{ marginTop: 18 }}
										name="dollar"
										size={18}
										color="grey"
									/>
									<TextInput
										onChangeText={(value) => handleChange(value, "amount")}
										value={transferCbu.amount}
										style={styles.inputs}
									/>
								</View>
							</View>
						</View>
						<View style={styles.checkContainer}>
							<Checkbox.Item
								status={checkbox === "arg" ? "checked" : "unchecked"}
								style={{ width: "100%" }}
								color="#4a47a3"
								label="ARG peso"
								onPress={() => handleCheck("arg")}
							/>
							<Checkbox.Item
								status={checkbox === "us" ? "checked" : "unchecked"}
								style={{ width: "100%" }}
								color="#4a47a3"
								label="US dollars"
								onPress={() => handleCheck("us")}
							/>
						</View>
						<View style={styles.inputsContainer}>
							<Text style={styles.titleTransfer}>Description:</Text>
							<View style={styles.inputWrapper}>
								<TextInput
									placeholder="Rent..."
									onChangeText={(value) => handleChange(value, "description")}
									value={transferCbu.description}
									style={styles.inputs}
								/>
							</View>
						</View>
						<View style={styles.containerButton}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => (Alert.alert('Transfer was successfully'))}
							>
								<Text style={styles.btntext}>Confirm</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default Transfer;
