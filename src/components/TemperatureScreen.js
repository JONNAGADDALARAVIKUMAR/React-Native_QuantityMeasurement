import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import ButtonStyles from '../styles/ButtonStyles'
import Header from './Header';
import TemeratureUnitConversionBlock from './TemeratureUnitConversionBlock';

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
                        style = {[ButtonStyles.temperatureStyle, ButtonStyles.normalStyle]}
                    >
                        <Image source = {require('../assets/tempActive.png')} style = {ButtonStyles.imagestyle}/>
                        <Text style = {ButtonStyles.TemperaturetextStyle}>Temperature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {ButtonStyles.buttonStyle}
                        onPress = {() => this.props.navigation.navigate('Volume')}
                    >
                        <Image source = {require('../assets/volume.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Volume</Text>
                    </TouchableOpacity>
                </View>
                <TemeratureUnitConversionBlock/>
                </ScrollView>
            </View>
        )
        }
}