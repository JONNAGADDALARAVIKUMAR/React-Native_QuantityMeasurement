import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
import unitConversionBlockStyles from '../styles/unitConversionBlockStyles'
import UnitObjects from './UnitObjects'
export default class TemeratureUnitConversionBlock extends Component {
    state = {
        selectedInputUnit: 'C',
        selectedOutputUnit: 'C',
        enteredValue: '1',
        outputValue : '1',
    } 
    inputUnitHandler = async (selectedInputUnitType) => {
        await this.setState({
            selectedInputUnit: selectedInputUnitType
        })
        console.log(selectedInputUnit);
    }

    outputUnitHandler = async (selectedOutputUnitType) => {
        await this.setState({
            selectedOutputUnit: selectedOutputUnitType
        })
        console.log(selectedOutputUnit);
    }
    inputValueHandler = async (value) => {
        await this.setState({
            enteredValue: value
        })
        var valueEntered = parseFloat(this.state.enteredValue);
        if(this.state.selectedInputUnit === 'C' && this.state.selectedOutputUnit === 'F') {
            this.setState({
                outputValue: (valueEntered * 1.8) + 32
            })
        }
        else if(this.state.selectedInputUnit === 'C' && this.state.selectedOutputUnit === 'K') {
            this.setState({
                outputValue: valueEntered + 273.15
            })
        }
        else if(this.state.selectedInputUnit === 'F' && this.state.selectedOutputUnit === 'C') {
            this.setState({
                outputValue: (valueEntered - 32) * ( 5 / 9)
            })
        }
        else if(this.state.selectedInputUnit === 'F' && this.state.selectedOutputUnit === 'K') {
            this.setState({
                outputValue: (valueEntered - 32) * (5 / 9) + 273.15
            })
        }
        else if(this.state.selectedInputUnit === 'K' && this.state.selectedOutputUnit === 'C') {
            this.setState({
                outputValue: valueEntered - 273.15 
            })
        }
        else if(this.state.selectedInputUnit === 'K' && this.state.selectedOutputUnit === 'F') {
            this.setState({
                outputValue: (valueEntered - 273.15 ) * (9 / 5) + 32
            })
        }
        else if(this.state.selectedInputUnit === this.state.selectedOutputUnit)
        this.setState({
            outputValue: valueEntered
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
                            <Picker.Item label = 'Celsius' value = 'C'/>
                            <Picker.Item label = 'FahrenHeit' value = 'F'/>
                            <Picker.Item label = 'Kelvin' value = 'K'/>
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
                            <Picker.Item label = 'Celsius' value = 'C'/>
                            <Picker.Item label = 'FahrenHeit' value = 'F'/>
                            <Picker.Item label = 'Kelvin' value = 'K'/>
                        </Picker>
                    </View>
                    <TextInput value = {this.state.outputValue.toString()}
                            editable = {false}
                            style = {[unitConversionBlockStyles.units_Box, unitConversionBlockStyles.output_box]}
                    />   
                </View>
            </View>
        )
    }
}