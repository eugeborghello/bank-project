import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent } from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStateOrAny, useSelector } from "react-redux";
import {
	Login,
	Register,
	Menu,
	Historial,
	Reset,
	Home,
	Profile,
	PersonalInfo,
	CBU,
	CompleteRegister,
} from "../../screens/index";

const Drawer = createDrawerNavigator();

const Nav = () => {
	const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
	return (
		<NavigationContainer>
			{user.length == 0 ? (
				<>
					<Drawer.Navigator
						drawerContent={(props) => <DrawerContent {...props} />}
						initialRouteName={"Home"}
					>
						<Drawer.Screen name="Home" component={Home} />
						<Drawer.Screen name="Login" component={Login} />
						<Drawer.Screen name="Register" component={Register} />
						<Drawer.Screen name="Reset" component={Reset} />
					</Drawer.Navigator>
				</>
			) : (
				<>
					<Drawer.Navigator
						drawerContent={(props) => <DrawerContent {...props} />}
						initialRouteName={"Home"}
					>
						<Drawer.Screen name="Home" component={Home} />
						<Drawer.Screen name="Menu" component={Menu} />
						<Drawer.Screen name="Profile" component={Profile} />
						<Drawer.Screen name="Historial" component={Historial} />
						<Drawer.Screen name="CBU" component={CBU} />
						<Drawer.Screen name="PersonalInfo" component={PersonalInfo} />
						{/* <Drawer.Screen name="CreditCard" component={CreditCard} /> */}
						<Drawer.Screen name="CompleteRegister" component={CompleteRegister} />
					</Drawer.Navigator>
				</>
			)}
		</NavigationContainer>
	);
};

export default Nav;
