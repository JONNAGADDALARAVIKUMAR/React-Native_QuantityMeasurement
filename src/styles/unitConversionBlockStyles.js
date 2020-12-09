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
        borderRadius: 15,
    },
    value_Box: {
        flex: 1,
    },
    input_box: {
        borderWidth: 1.5,
        marginTop: 10,
        marginRight: 8,
        marginBottom: '10%'
    },
    output_box: {
        color: '#646269',
        borderWidth: 1,
        borderColor: '#69666e',
        marginTop: 10,
        marginRight: 10,
        marginBottom: '10%'
    },
    picker_Style: {
        flex: 0.5,
        borderWidth: 1.5,
        marginTop: 10,
        marginRight: 10,
        marginBottom: '10%',
        borderRadius: 15,
    }
})

export default unitConversionBlockStyles;