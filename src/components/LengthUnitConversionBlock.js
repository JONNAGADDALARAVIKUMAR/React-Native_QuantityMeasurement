import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker
} from 'react-native';
import unitConversionBlockStyles from '../styles/unitConversionBlockStyles'
export default class LengthUnitConversionBlock extends Component {
    state = {
        selectedInputUnit: 'm',
        selectedOutputUnit: 'm',
        enteredValue: '1',
        outputValue : 'output',
    } 
    inputUnitHandler = async (selectedInputUnitType) => {
        await this.setState({
            selectedInputUnit: selectedInputUnitType
        })
        console.log(this.state.selectedInputUnit);
    }

    outputUnitHandler = async (selectedOutputUnitType) => {
        await this.setState({
            selectedOutputUnit: selectedOutputUnitType
        })
        console.log(this.state.selectedOutputUnit);
    }
    inputValueHandler = async (value) => {
        await this.setState({
            enteredValue: value
        })
        console.log(this.state.enteredValue);
    }
    render() {
        return (
            <View style = {unitConversionBlockStyles.container}>
                <Text style = {unitConversionBlockStyles.from_To}>From :</Text>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{
                        flex: 0.5,
                        borderWidth: 1.5,
                        marginTop: 10,
                        marginRight: 10,
                        marginBottom: '10%',
                    }}>
                        <Picker
                            selectedValue = {this.state.selectedInputUnit}
                            onValueChange = {(selectedUnit) => this.inputUnitHandler(selectedUnit)}
                        >
                            <Picker.Item label = 'CM' value = 'cm'/>
                            <Picker.Item label = 'Meter' value = 'm'/>
                            <Picker.Item label = 'Inch' value = 'inch'/>
                            <Picker.Item label = 'Foot' value = 'foot'/>
                            <Picker.Item label = 'Yard' value = 'yard'/>
                        </Picker>
                    </View>
                    <TextInput placeholder = {'Enter Input'}
                        style = {[unitConversionBlockStyles.units_Box, unitConversionBlockStyles.input_box]}
                        onChangeText = {(value) => this.inputValueHandler(value)}
                                // value = {}
                    />   
                </View>
                <Text style = {unitConversionBlockStyles.from_To}>To :</Text>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{
                        flex: 0.5,
                        borderWidth: 1.5,
                        marginTop: 10,
                        marginRight: 10,
                        marginBottom: '10%',
                    }}>
                        <Picker
                            selectedValue = {this.state.selectedOutputUnit}
                            onValueChange = {(selectedUnit) => this.outputUnitHandler(selectedUnit)}
                        >
                            <Picker.Item label = 'CM' value = 'cm'/>
                            <Picker.Item label = 'Meter' value = 'm'/>
                            <Picker.Item label = 'Inch' value = 'inch'/>
                            <Picker.Item label = 'Foot' value = 'foot'/>
                            <Picker.Item label = 'Yard' value = 'yard'/>
                        </Picker>
                    </View>
                    <TextInput placeholder = {this.state.outputValue}
                            editable = {false}
                        style = {[unitConversionBlockStyles.units_Box, unitConversionBlockStyles.output_box]}
                    />   
                </View>
            </View>
        )
    }
}