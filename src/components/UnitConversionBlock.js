import React, {Component} from 'react';
import {View, Text, TextInput,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import unitConversionBlockStyles from '../styles/unitConversionBlockStyles'
import UnitDataController from 'C:/Users/Admin/javaScript/UpdatedQuantityMeasurement/UnitDataController.js';

export default class UnitConversionBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lengthUnits: UnitDataController.lengthUnits,
            lengthValues: UnitDataController.lengthValues,
            tempertureUnits: UnitDataController.tempertureUnits,
            tempertureValues: UnitDataController.tempertureValues,
            volumeUnits: UnitDataController.volumeUnits,
            volumeValues: UnitDataController.volumeValues,
            selectedInputUnit: 0,
            selectedOutputUnit: 0,
            enteredValue: '',
            outputValue : '',
        } 
    }

    inputUnitHandler = async (selectedInputUnitType) => {
        await this.setState({
            selectedInputUnit: selectedInputUnitType
        })
        this.inputValueHandler(this.state.enteredValue)
    }

    outputUnitHandler = async (selectedOutputUnitType) => {
        await this.setState({
            selectedOutputUnit: selectedOutputUnitType
        })    
        this.inputValueHandler(this.state.enteredValue)
    }

    inputValueHandler = async (value) => {
        await this.setState({
            enteredValue: value
        })

        if(this.props.type == 'Length') {
            var inputUnit = parseFloat(this.state.selectedInputUnit);
            var outputUnit = parseFloat(this.state.selectedOutputUnit);
            var valueEntered = parseFloat(this.state.enteredValue);

            this.setState({
                outputValue: (valueEntered * this.state.lengthValues[inputUnit]) / this.state.lengthValues[outputUnit]
            })
        }
        else if(this.props.type == 'Volume') {
            var inputUnit = parseFloat(this.state.selectedInputUnit);
            var outputUnit = parseFloat(this.state.selectedOutputUnit);
            var valueEntered = parseFloat(this.state.enteredValue);

            this.setState({
                outputValue: (valueEntered * this.state.volumeValues[inputUnit]) / this.state.volumeValues[outputUnit]
            })
        }
        else if(this.props.type == 'Temperature') {
            var valueEntered = parseFloat(this.state.enteredValue);
            var inputUnit = this.state.tempertureValues[this.state.selectedInputUnit];
            var outputUnit = this.state.tempertureValues[this.state.selectedOutputUnit];

            if(inputUnit === 'C' && outputUnit === 'F') {
                this.setState({
                    outputValue: (valueEntered * 1.8) + 32
                })
            }
            else if(inputUnit === 'C' && outputUnit === 'K') {
                this.setState({
                    outputValue: valueEntered + 273.15
                })
            }
            else if(inputUnit === 'F' && outputUnit === 'C') {
                this.setState({
                    outputValue: (valueEntered - 32) * ( 5 / 9)
                })
            }
            else if(inputUnit === 'F' && outputUnit === 'K') {
                this.setState({
                    outputValue: (valueEntered - 32) * (5 / 9) + 273.15
                })
            }
            else if(inputUnit === 'K' && outputUnit === 'C') {
                this.setState({
                    outputValue: valueEntered - 273.15 
                })
            }
            else if(inputUnit === 'K' && outputUnit === 'F') {
                this.setState({
                    outputValue: (valueEntered - 273.15 ) * (9 / 5) + 32
                })
            }
            else if(inputUnit === outputUnit)
                this.setState({
                    outputValue: valueEntered
                })
        }
         
        this.setState((state) => ({
            outputValue: Number(Math.round(state.outputValue+'e4')+'e-4')
        }))
    }

    render() {
        return (
            <View style = {unitConversionBlockStyles.container}>
                <Text style = {unitConversionBlockStyles.from_To}>From :</Text>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {unitConversionBlockStyles.picker_Style}>
                        <Picker
                            selectedValue = {this.state.selectedInputUnit}
                            onValueChange = {(selectedUnit) => this.inputUnitHandler(selectedUnit)}
                            mode = "dropdown">
                                
                                { (this.props.type == 'Length') ? 
                                    this.state.lengthUnits.map((unit, index) => { 
                                        return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                    }) : (this.props.type == 'Temperature') ? 
                                            this.state.tempertureUnits.map((unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) : this.state.volumeUnits.map((unit, index) => {
                                                    return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            
                        </Picker>
                    </View>
                    <TextInput 
                        placeholder = {'Enter Input'}
                        placeholderTextColor = '#646269'
                        style = {[unitConversionBlockStyles.units_Box,
                                  unitConversionBlockStyles.input_box]}
                        onChangeText = {(value) => this.inputValueHandler(value)}
                    />   
                </View>

                <Text style = {unitConversionBlockStyles.from_To}>To :</Text>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {unitConversionBlockStyles.picker_Style}>
                        <Picker
                            selectedValue = {this.state.selectedOutputUnit}
                            onValueChange = {(selectedUnit) => this.outputUnitHandler(selectedUnit)}
                            mode = "dropdown">
                                
                                { (this.props.type == 'Length') ? 
                                    this.state.lengthUnits.map((unit, index) => { 
                                        return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                    }) : (this.props.type == 'Temperature') ? 
                                            this.state.tempertureUnits.map((unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) : this.state.volumeUnits.map((unit, index) => {
                                                    return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            
                        </Picker>
                    </View>
                    <TextInput 
                        value = {(this.state.outputValue.toString() != 'NaN') ? this.state.outputValue.toString() : '0'}
                        placeholder = {'Output'}
                        placeholderTextColor = '#646269'
                        editable = {false}
                        style = {[unitConversionBlockStyles.units_Box,
                                  unitConversionBlockStyles.output_box]}
                    />   
                </View>
            </View>
        )
    }
}