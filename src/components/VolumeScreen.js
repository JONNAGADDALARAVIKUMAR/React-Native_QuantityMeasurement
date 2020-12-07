import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import UnitConversionBlock from './UnitConversionBlock';
import Header from './Header';
import UnitButtons from './UnitButtons'

export default class VolumeScreen extends Component {
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
                    type = 'Volume'
                />
                <UnitConversionBlock type = 'Volume'/>
            </ScrollView>
        </View>
        )   
    }
}