import React from 'react'
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from "./DrawerContent"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {AuthContext} from '../Context';
import { Login, Register, Menu, Reset ,Home} from '../../screens/index';

const Drawer = createDrawerNavigator();

const Nav = () => {
  const {state,dispatch} = React.useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {AuthContext=>(
    <NavigationContainer>
      {
        state.login == 'false' ? <>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props } />} initialRouteName={"Home"}>
        <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Reset" component={Reset} />
      </Drawer.Navigator>
        </>:<>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props } />} initialRouteName={"Home"}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Reset" component={Reset} />
        <Drawer.Screen name="Menu" component={Menu} />

      </Drawer.Navigator></>
      }
      
    </NavigationContainer>)
}
    </AuthContext.Consumer>
  );
};

export default Nav;