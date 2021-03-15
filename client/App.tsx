import React from 'react';
import Nav from './components/Nav/Nav';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
      <Nav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
