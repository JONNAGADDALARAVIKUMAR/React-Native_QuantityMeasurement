import React from 'react';
import {StyleSheet} from 'react-native';

const unitConversionBlockStyles = StyleSheet.create({
    container: {
        marginTop: '8%',
        marginLeft: 10,
    },
    from_To: {
        fontSize: 20,
        color: '#323436'
    },
    units_Box: {
        flex: 0.7,
    },
    value_Box: {
        flex: 1,
    },
    input_box: {
        borderWidth: 1.5,
        marginTop: 10,
        marginRight: 10,
        marginBottom: '10%'
    },
    output_box: {
        borderWidth: 1,
        marginTop: 10,
        marginRight: 10,
        marginBottom: '10%'
    }
})

export default unitConversionBlockStyles;