import React from 'react'
import {View,Text} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from "./DrawerContent"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Search = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};
const Nav = () => { 
    return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Search" component={Search} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Nav;