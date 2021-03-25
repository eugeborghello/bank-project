import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, FlatList, TouchableHighlight, View } from "react-native";
import styles from "./personalInfoStyles";
import { RootStateOrAny, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function PersonalInfo() {
	const navigation = useNavigation();
	let datos = {
		email: "otro@gmail.com",
		adress: " Comarca  ",
		postalCode: "5588",
		location: "New York",
		province: "Santa Fe",
	};
	const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
	console.log(user);

	return (
		<>
			{user[0].name == undefined ? (
				<>
					<View style={styles.container}>
						<Text style={styles.title}>Complete Register</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("CompleteRegister");
							}}
						>
							<Text style={styles.signup}>Go to Complete Register</Text>
						</TouchableOpacity>
					</View>
				</>
			) : (
				<>
					<View style={styles.container}>
						<Text style={styles.title}>Personal Information</Text>
						{/*                              <EMAIL>  */}
						<View style={styles.row}>
							<Text style={styles.principal}>Email</Text>

							<Text style={styles.second}>{user[0].email}</Text>
						</View>

						<View style={styles.row}>
							{/*                             <ADRESS>  */}
							<Text style={styles.principal}>Adress</Text>
							<Text style={styles.second}>{user[0].address}</Text>
						</View>
						<View style={styles.row}>
							{/*                         <POSTAL CODE>  */}
							<Text style={styles.principal}>Postal Code</Text>
							<Text style={styles.second}>{datos.postalCode}</Text>
						</View>
						<View style={styles.row}>
							{/*                         <LOCATION>  */}
							<Text style={styles.principal}>Location</Text>
							<Text style={styles.second}>{datos.location}</Text>
						</View>
						<View style={styles.row}>
							{/*                          <PROVINCE>  */}
							<Text style={styles.principal}>Province</Text>
							<Text style={styles.second}>{datos.province}</Text>
						</View>
					</View>
				</>
			)}
		</>
	);
}
