import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker
} from 'react-native';
import unitConversionBlockStyles from '../styles/unitConversionBlockStyles'
export default class TemeratureUnitConversionBlock extends Component {
    state = {
        selectedInputUnit: '1000',
        selectedOutputUnit: '1000',
        enteredValue: '1',
        outputValue : '1',
    } 
    inputUnitHandler = async (selectedInputUnitType) => {
        await this.setState({
            selectedInputUnit: selectedInputUnitType
        })
        
    }

    outputUnitHandler = async (selectedOutputUnitType) => {
        await this.setState({
            selectedOutputUnit: selectedOutputUnitType
        })
        
    }
    inputValueHandler = async (value) => {
        await this.setState({
            enteredValue: value
        })
        var inutUnit = parseFloat(this.state.selectedInputUnit);
        var outputUnit = parseFloat(this.state.selectedOutputUnit);
        var valueEntered = parseFloat(this.state.enteredValue);
        this.setState({
            outputValue: (valueEntered * inutUnit) / outputUnit
        })
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
                            <Picker.Item label = 'Milli Litre' value = '1'/>
                            <Picker.Item label = 'Litre' value = '1000'/>
                            <Picker.Item label = 'Gallon' value = '3785'/>
                            <Picker.Item label = 'Cubic Meter' value = '1000000'/>
                            <Picker.Item label = 'Cubic Centi Meter' value = '1.0'/>
                            <Picker.Item label = 'Cubic Mill Miter' value = '0.001'/>
                        </Picker>
                    </View>
                    <TextInput placeholder = {'Enter Input'}
                            style = {[unitConversionBlockStyles.units_Box, unitConversionBlockStyles.input_box]}
                            onChangeText = {(value) => this.inputValueHandler(value)}
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
                            <Picker.Item label = 'Milli Litre' value = '1'/>
                            <Picker.Item label = 'Litre' value = '1000'/>
                            <Picker.Item label = 'Gallon' value = '3785'/>
                            <Picker.Item label = 'Cubic Meter' value = '1000000'/>
                            <Picker.Item label = 'Cubic Centi Meter' value = '1.0'/>
                            <Picker.Item label = 'Cubic Mill Miter' value = '0.001'/>
                        </Picker>
                    </View>
                    <TextInput placeholder = {this.state.outputValue}
                            editable = {false}
                            style = {[unitConversionBlockStyles.units_Box, unitConversionBlockStyles.output_box]}
                                // onChangeText = {}
                                // value = {}
                    />   
                </View>
            </View>
        )
    }
}