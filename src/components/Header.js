import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style = {{height: '20%'}}>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{flex: 1}}>
                        <Text style = {[styles.quanment, styles.head_Bar]}>Quanment</Text>
                    </View>
                    <View style = {{flex: 1}}>
                        <Text style = {[styles.history, styles.head_Bar]}>History</Text>
                    </View>
                    </View>
                <View>
                    <Text style = {styles.heading}>Welcome to Quantity Measurement</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quanment: {
        color: 'black',
        fontSize: 20,
    },
    history: {
        fontSize: 14, 
        color: 'black',
    },
    heading: {
        backgroundColor: '#446dff',
        height: '70%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#e8ddff',
        paddingBottom: 2,
    },
    head_Bar: {
        fontWeight: 'bold',
        marginTop: '10%',
        marginBottom: '10%',
        width: '100%',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
})
