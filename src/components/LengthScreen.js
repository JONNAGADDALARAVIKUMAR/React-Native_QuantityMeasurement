import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import LengthScreenButtons from './LengthScreenButtons';
import Header from './Header';
import LengthUnitConversionBlock from './LengthUnitConversionBlock';

export default class LengthScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Header/>
                <LengthScreenButtons/>
                <LengthUnitConversionBlock/>
            </View>
        )
    }
}
