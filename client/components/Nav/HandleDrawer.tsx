import React from 'react'
import {useNavigation , DrawerActions} from '@react-navigation/native';
import { SafeAreaView,TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
const HandleDrawer = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
    <TouchableOpacity style={{alignItems:'flex-end',marginTop:30,marginRight:30,marginBottom:10}} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
    <FontAwesome5 name='bars' size={24} color='grey' />
    </TouchableOpacity>
  </SafeAreaView>
  );
};

export default HandleDrawer;