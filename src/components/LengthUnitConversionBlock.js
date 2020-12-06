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
        selectedInputUnit: '1',
        selectedOutputUnit: '1',
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
                            <Picker.Item label = 'Milli Meter' value = '1' key = '1'/>
                            <Picker.Item label = 'Centi Meter' value = '10' key = '2'/>
                            <Picker.Item label = 'Meter' value = '1000' key = '3'/>
                            <Picker.Item label = 'Kilo Meter' value = '1000000' key = '4'/>
                            <Picker.Item label = 'Inch' value = '25.4' key = '5'/>
                            <Picker.Item label = 'Foot' value = '304.8' key = '6'/>
                            <Picker.Item label = 'Yard' value = '914.4' key = '7'/>
                        </Picker>
                    </View>
                    <TextInput placeholder = {'1'}
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
                            <Picker.Item label = 'Milli Meter' value = '1' key = '1'/>
                            <Picker.Item label = 'Centi Meter' value = '10' key = '2'/>
                            <Picker.Item label = 'Meter' value = '1000' key = '3'/>
                            <Picker.Item label = 'Kilo Meter' value = '1000000' key = '4'/>
                            <Picker.Item label = 'Inch' value = '25.4' key = '5'/>
                            <Picker.Item label = 'Foot' value = '304.8' key = '6'/>
                            <Picker.Item label = 'Yard' value = '914.4' key = '7'/>
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