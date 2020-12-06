import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles'
import VolumeUnitConversionBlock from './VolumeUnitConversionBlock';
import Header from './Header';

export default class VolumeScreenButtons extends Component {
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
                        style = {[ButtonStyles.buttonStyle, ButtonStyles.normalStyle]}
                        onPress = {() => this.props.navigation.navigate('Length')}
                    >
                        <Image source = {require('../assets/scale.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Length</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[ButtonStyles.buttonStyle, ButtonStyles.normalStyle]}
                        onPress = {() => this.props.navigation.navigate('Temperature')}
                    >
                        <Image source = {require('../assets/temp.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Temperature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[ButtonStyles.volumeStyle, ButtonStyles.normalStyle]}
                    >
                        <Image source = {require('../assets/volumeActive.png')} style = {ButtonStyles.imagestyle}/>
                        <Text style = {ButtonStyles.VolumetextStyle}>Volume</Text>
                    </TouchableOpacity>
                </View>
                <VolumeUnitConversionBlock/>
            </ScrollView>
        </View>
    )   
        }
}