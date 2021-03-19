import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent } from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login, Register, Menu, Reset, Reset2, Home } from "../../screens/index";

const Drawer = createDrawerNavigator();

const Nav = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={(props) => <DrawerContent {...props} />}
				initialRouteName={"Home"}
			>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Register" component={Register} />
				<Drawer.Screen name="Menu" component={Menu} />
				<Drawer.Screen name="Reset" component={Reset} />
				<Drawer.Screen name="Reset2" component={Reset2} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Nav;
