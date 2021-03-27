import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer, Avatar, Title, Caption, Paragraph } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

export function DrawerContent(props: any) {
	const dispatch = useDispatch();
	const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
	console.log(user);
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					{user.length == 0 ? (
						<>
							<Drawer.Section style={styles.drawerSection}>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon name="home-outline" color={color} size={size} />
									)}
									label="Home"
									onPress={() => {
										props.navigation.navigate("Home");
									}}
								/>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon name="account-outline" color={color} size={size} />
									)}
									label="Login"
									onPress={() => {
										props.navigation.navigate("Login");
									}}
								/>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon name="account-outline" color={color} size={size} />
									)}
									label="Transfer"
									onPress={() => {
										props.navigation.navigate("Transfer");
									}}
								/>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon
											name="account-check-outline"
											color={color}
											size={size}
										/>
									)}
									label="Register"
									onPress={() => {
										props.navigation.navigate("Register");
									}}
								/>

							</Drawer.Section>
						</>
					) : (
						<>
							<View style={styles.userInfoSection}>
								<View style={{ flexDirection: "row", marginTop: 15 }}>
									<Avatar.Image
										source={{
											uri:
												user[0].imgUrl + "" ||
												`https://culturageek.com.ar/wp-content/uploads/2021/02/tomholland-scaled.jpg`,
										}}
										size={50}
									/>
									<View style={{ marginLeft: 15, flexDirection: "column" }}>
										<Title style={styles.title}>
											{user[0].name || user[0].email}
										</Title>
									</View>
								</View>
							</View>
							<Drawer.Section style={styles.drawerSection}>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon name="home-outline" color={color} size={size} />
									)}
									label="Home"
									onPress={() => {
										props.navigation.navigate("Home");
									}}
								/>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon
											name="account-check-outline"
											color={color}
											size={size}
										/>
									)}
									label="Menu"
									onPress={() => {
										props.navigation.navigate("Menu");
									}}
								/>
								<DrawerItem
									icon={({ color, size }) => (
										<Icon name="account-outline" color={color} size={size} />
									)}
									label="Profile"
									onPress={() => {
										props.navigation.navigate("Profile");
									}}
								/>
							</Drawer.Section>
						</>
					)}
				</View>
			</DrawerContentScrollView>
			{user.length > 0 ? (
				<>
					<Drawer.Section style={styles.bottomDrawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="exit-to-app" color={color} size={size} />
							)}
							label="Sign Out"
							onPress={() =>
								dispatch({
									type: "LOGOUT",
								})
							}
						/>
					</Drawer.Section>
				</>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	drawerSection: {
		marginTop: 15,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
});
