import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LengthScreen from './src/components/LengthScreen';
import TemperatureScreen from './src/components/TemperatureScreen';
import VolumeScreen from './src/components/VolumeScreen';

class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <ScrollView>
          <TemperatureScreen/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9f0f2', 
    height: '100%'
  }
});

export default App;
