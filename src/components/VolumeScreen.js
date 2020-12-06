import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import Header from './Header';
import VolumeUnitConversionBlock from './VolumeUnitConversionBlock';
import VolumeScreenButtons from './VolumeScreenButtons'

export default class LengthScreen extends Component {
    render() {
        return (
            <View>
                <Header/>
                <VolumeScreenButtons/>
                <VolumeUnitConversionBlock/>
            </View>
        )
    }
}