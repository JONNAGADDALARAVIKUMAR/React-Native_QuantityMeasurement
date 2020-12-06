import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
import Header from './Header';
import LengthUnitConversionBlock from './LengthUnitConversionBlock';

export default class TemperatureScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    return (
        <View>
            <ScrollView>
                <Header/>
                <View>
                    <Text style = {ButtonStyles.chooseType}>CHOOSE TYPE</Text>
                </View>     
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style = {[ButtonStyles.lengthStyle, ButtonStyles.normalStyle]}    
                    >
                        <Image source = {require('../assets/scaleActive.png')} style = {ButtonStyles.imagestyle}/>
                        <Text style = {ButtonStyles.LengthtextStyle}>Length</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {ButtonStyles.buttonStyle}
                        onPress = {() => this.props.navigation.navigate('Temperature')}
                    >
                        <Image source = {require('../assets/temp.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Temperature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {ButtonStyles.buttonStyle}
                        onPress = {() => this.props.navigation.navigate('Volume')}
                    >
                        <Image source = {require('../assets/volume.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Volume</Text>
                    </TouchableOpacity>
                </View>
                <LengthUnitConversionBlock/>
            </ScrollView>
        </View>
    )
    }
    
}