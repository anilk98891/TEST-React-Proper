import React from 'react'
import {TextInput, View, Text} from 'react-native';

const FieldInput = ({labelProp, value, onChangeText, placeHoldertext, secureTextEntry}) =>{
    const {inputStyle, labelStyle , containerStyle} = styles;

return (
    <View style ={containerStyle}>
        <Text style ={labelStyle}>
            {labelProp}
        </Text>
        <TextInput
        secureTextEntry = {secureTextEntry}
        placeholder = {placeHoldertext}  
        autoCorrect = {false}
        value = {value}
        onChangeText= {onChangeText}
        style = {inputStyle}>
        </TextInput>
    </View>
)
};

const styles = {
    inputStyle : {
        color : '#000',
        paddingRight : 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight : 23,
        flex : 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle : {
        height : 40,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    }
}
export  {FieldInput}
