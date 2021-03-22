import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
} from 'react-native';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

UIManager.setLayoutAnimationEnabledExperimental(true);



export default class App extends Component {
  _onFocus = field => console.log('focusing', field)

  _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
});