import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import Header from './Header';
import UnitConversionBlock from './UnitConversionBlock';
import UnitButtons from './UnitButtons';

export default class TemperatureScreen extends Component {
    constructor(props) {
        super(props)
    } 
    
    render() {
        return (
            <View>
                <ScrollView>
                    <Header/>
                    <UnitButtons
                        navigation = {this.props.navigation}
                        type = 'Temperature'
                    />
                    <UnitConversionBlock type = 'Temperature'/>
                </ScrollView>
            </View>
        )
    }
}