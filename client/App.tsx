import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Menu from './components/Menu/Menu';

export default function App() {
  return (
    <View >
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
}

