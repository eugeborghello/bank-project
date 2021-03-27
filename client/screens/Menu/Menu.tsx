import React, { FC, useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import styles from "./MenuStyles";
import { MaterialCommunityIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStateOrAny, useSelector } from "react-redux";

import { Provider, TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";
import axios from "axios";

/* 
interface Props {
    icon: string;
    onChange : (text: string) => void
}

const Menu: FC <Props> = () => {}
*/
let accountList: { label: any; value: any }[] = [];
let datos:
	| any[]
	| { balance: number; userId: string[]; _id: string; cbu: string; currency: string; __v: 0 }[];
const Menu: FC = () => {
	const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
	const account = useSelector((state: RootStateOrAny) => state.accountsReducer);

	const userId = "605d00a37be06146d47b575a";

	axios.get("http://localhost:3002/accounts/" + userId).then((val) => {
		datos = val.data;
		val.data.forEach((accountE) => {
			console.log(accountE);
			accountList.push({
				label: accountE.cbu + " " + accountE.currency,
				value: accountE._id,
			});
		});
	});

	const [showDropDown, setShowDropDown] = useState(false);
	const setShowDropDown2 = (val: boolean) => {
		console.log(val);
	};
	const [accountType, setAccountType] = useState<string | number>();
	const setAccountType2 = (val: string | number) => {
		account.balance = datos.find((acE) => {
			return acE._id === val;
		}).balance;
		console.log(account.balance);
	};

	const navigation = useNavigation();

	const styles2 = StyleSheet.create({
		containerStyle: {
			flex: 1,
			marginHorizontal: 20,
			justifyContent: "center",
		},
	});

	return (
		<View style={styles.view}>
			<View style={styles.viewMenu}>
				<Text style={styles.text}> Hello, {user[0].name || "Stranger"}! </Text>
				<Image
					style={styles.image}
					source={{
						uri: "https://image.flaticon.com/icons/png/512/2936/2936469.png",
					}}
				/>
			</View>
			<Provider>
				<SafeAreaView style={styles2.containerStyle}>
					<DropDown
						label={"Cuentas"}
						mode={"outlined"}
						value={accountType}
						setValue={setAccountType2}
						list={accountList}
						visible={showDropDown}
						showDropDown={() => setShowDropDown(true)}
						onDismiss={() => setShowDropDown(false)}
						inputProps={{
							right: <TextInput.Icon name={"menu-down"} />,
						}}
					/>
				</SafeAreaView>
			</Provider>
			<View style={styles.viewBalance}>
				<Text style={styles.balanceText}> Total balance:</Text>
				<Text style={styles.balanceText}> ${account.balance || 0} </Text>
			</View>

			<View style={styles.container}>
				<View style={styles.viewCard}>
					<View style={styles.titulo}>
						<Text style={styles.tituloText}> CreditCard </Text>
						<Text style={styles.tituloText}> BANK </Text>
					</View>
					<View style={styles.numberView}>
						<Text
							style={{
								fontSize: 18.5,
								// fontWeight: 'bold',
								fontFamily: "Roboto_500Medium",
							}}
						>
							0000 0000 0000 0000
						</Text>
					</View>
					<View style={styles.dateView}>
						<Text> 02/22 </Text>
					</View>
				</View>

				<View style={styles.viewButton}>
					<View style={styles.viewButtonRow}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => Alert.alert("Transacciones")}
						>
							<MaterialCommunityIcons name="bank-transfer" size={26} color="black" />
							<Text style={styles.buttonText}>Transactions</Text>
						</TouchableOpacity>

						<View style={styles.viewButtonRow}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => navigation.navigate("CBU")}
							>
								<MaterialCommunityIcons
									name="account-cog"
									size={20}
									color="black"
								/>
								<Text style={styles.buttonText}>My account</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button}
								// onPress={() => navigation.navigate("CreditCard")}
							>
								<MaterialCommunityIcons
									name="credit-card-multiple-outline"
									size={20}
									color="black"
								/>
								<Text style={styles.buttonText}>Cards</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={styles.button}
							onPress={() => Alert.alert("Mis productos")}
						>
							<MaterialCommunityIcons
								name="credit-card-multiple-outline"
								size={20}
								color="black"
							/>
							<Text style={styles.buttonText}>Cards</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.viewButtonRow}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => Alert.alert("Recargar dinero")}
						>
							<MaterialCommunityIcons
								name="wallet-plus-outline"
								size={20}
								color="black"
							/>
							<Text style={styles.buttonText}>Recharge money</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => Alert.alert("Realizar pago")}
						>
							<FontAwesome name="send" size={20} color="black" />
							<Text style={styles.buttonText}>Send money</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Menu;
