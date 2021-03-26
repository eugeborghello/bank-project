import React, { FC } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import styles from "./AccountStyles";
import { MaterialCommunityIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";
/* 
interface Props {
    icon: string;
    onChange : (text: string) => void
}

const Menu: FC <Props> = () => {}
*/

const Menu: FC = () => {
	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.view}>
				<View style={styles.viewMenu}>
					<MaterialCommunityIcons
						name="menu"
						size={26}
						color="white"
						style={{ top: 15 }}
					/>
					<Text style={styles.text}> Hello, Pepito! </Text>
					<Image
						style={styles.image}
						source={{
							uri: "https://image.flaticon.com/icons/png/512/2936/2936469.png",
						}}
					/>
				</View>
				<View style={styles.viewBalance}>
					<Text style={styles.balanceText}> Total balance:</Text>
					<Text style={styles.balanceText}> $5210.50 </Text>
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
								<MaterialCommunityIcons
									name="bank-transfer"
									size={26}
									color="black"
								/>
								<Text style={styles.buttonText}>Transactions</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button}
								onPress={() => Alert.alert("Estadísticas")}
							>
								<Octicons name="graph" size={20} color="black" />
								<Text style={styles.buttonText}>Statistics</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.viewButtonRow}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => Alert.alert("Mis datos")}
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
	}
};

export default Menu;
