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
                <Header/>
                <ScrollView ScrollView style = {{marginBottom: '15%', marginTop: '10%'}}>
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