import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import TemperatureScreenButtons from './TemperatureScreenButtons';
import Header from './Header';
import TemeratureUnitConversionBlock from './TemeratureUnitConversionBlock';

export default class LengthScreen extends Component {
    render() {
        return (
            <View>
                <Header/>
                <TemperatureScreenButtons/>
                <TemeratureUnitConversionBlock/>
            </View>
        )
    }
}