import React from 'react'
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from "./DrawerContent"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, Register, Menu, Reset ,Home,Profile,PersonalInfo,CBU} from '../../screens/index';

const Drawer = createDrawerNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName={"Home"}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Reset" component={Reset} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="CBU" component={CBU} />
        <Drawer.Screen name="PersonalInfo" component={PersonalInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Nav;