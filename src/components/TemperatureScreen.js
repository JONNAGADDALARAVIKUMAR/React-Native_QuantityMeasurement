import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
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
                <Header/>
                <ScrollView ScrollView style = {{marginBottom: '15%', marginTop: '10%'}}>
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