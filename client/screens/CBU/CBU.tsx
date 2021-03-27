const frase =
	"It is the number that identifies your VESKI account. It helps you receive or send money to or from any bank account or virtual wallet. It is credited at the moment.";

import React, { useState } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	FlatList,
	TouchableHighlight,
	View,
	TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { RootStateOrAny, useSelector } from "react-redux";
import * as Sharing from "expo-sharing";

export default function PersonalInfo() {
	const account = useSelector((state: RootStateOrAny) => state.accountsReducer.accounts[0][0]);
	console.log(account);
	console.log(account.cbu);
	let datos = {
		CBU: "12345678901234567890",
		Nickname: " OTRODESANTAFE.VESKI  ",
	};

	const openShareDialog = async () => {
		if (!(await Sharing.isAvailableAsync())) {
			alert("Sharing is not available on your platform");
			return;
		}

		await Sharing.shareAsync(account.cbu);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>CBU (Unique Bank Key)</Text>
			<Text>{frase}</Text>
			{/*                              <CBU>  */}
			<View style={styles.row}>
				{/*                             <NICKNAME>  */}
				<Text style={styles.principal}>Nickname</Text>
				<Text style={styles.second}>Nickname</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.principal}>CBU (Unique Bank Key)</Text>

				<Text style={styles.second}>{account.cbu}</Text>

				{account.cbu ? (
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.sendButton}
						onPress={openShareDialog}
					>
						<Text style={styles.sendButtonText}>Share</Text>
					</TouchableOpacity>
				) : (
					<View />
				)}
			</View>
		</View>
	);
}
