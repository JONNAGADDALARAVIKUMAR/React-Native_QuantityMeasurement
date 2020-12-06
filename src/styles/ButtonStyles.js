import React from 'react';
import {StyleSheet} from 'react-native';

const ButtonStyles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'white',
        color: '#b4bfba',
        flex: 1,
        alignItems: 'center',
        height: 110,
        borderRadius: 10,
        margin: 10,
        paddingTop: 15,
    },
    imagestyle: {
        height: '60%',
        marginBottom: '5%'
    },
    normalStyle: {
        flex: 1,
        alignItems: 'center',
        height: 110,
        borderRadius: 10,
        margin: 10,
        paddingTop: 15,
    },
    lengthStyle: {
        backgroundColor: '#c4f2dd',
        borderColor: '#0EC098',
        borderWidth: 2,
    },
    temperatureStyle: {
        backgroundColor: '#f5d7da',
        borderColor: '#FD5160',
        borderWidth: 2,
    },
    volumeStyle: {
        backgroundColor: '#c9b9ed',
        borderColor: '#571be3',
        borderWidth: 2,
    },
    LengthtextStyle: {
        color: '#0EC098',
        fontWeight: 'bold',
        fontSize: 18
    },
    TemperaturetextStyle: {
        color: '#FD5160',
        fontWeight: 'bold',
        fontSize: 16
    },
    VolumetextStyle: {
        color: '#571be3',
        fontWeight: 'bold',
        fontSize: 16
    },
    chooseType: {
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 5, 
        marginTop: '15%',
        color: '#323436',
    }
})
export default ButtonStyles;