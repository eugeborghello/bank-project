import React from 'react'
import {View,Text} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from "./DrawerContent"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Login,Register,Menu} from '../../screens/index';
import Reset from './Reset';

const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};
const Nav = () => { 
    return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName={"Home"}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Reset Password" component={Reset} />
          <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Nav;