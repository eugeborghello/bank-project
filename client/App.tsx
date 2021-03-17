import React from 'react';
import Nav from './components/Nav/Nav';
import { StyleSheet} from 'react-native';
import {AuthProvider} from './components/Context';
export default function App() {
  return (
    <AuthProvider>
        <Nav/>

    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
