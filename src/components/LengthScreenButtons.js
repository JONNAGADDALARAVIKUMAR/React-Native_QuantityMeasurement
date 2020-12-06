import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles'

export default class LengthButtonScreen extends Component {
    render() {
        return (
            <View>
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
                    >
                        <Image source = {require('../assets/temp.png')} style = {ButtonStyles.imagestyle}/>
                        <Text>Temperature</Text>
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