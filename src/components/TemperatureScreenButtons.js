import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles'

export default class VolumeScreenButtons extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style = {ButtonStyles.chooseType}>CHOOSE TYPE</Text>
                </View>     
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style = {[ButtonStyles.buttonStyle, ButtonStyles.normalStyle]}
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
                    >
                        <Image source = {require('../assets/volume.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Volume</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}