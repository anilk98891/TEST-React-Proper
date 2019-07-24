import React from "react";
import {Text, View} from "react-native";

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style = {viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor : "#F8F8F8",
        justifiedContent: 'center',
        alignItems : 'center',
        height: 90,
        paddingTop: 50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height : 2},
        shadowOpacity : 0.5,
        elevation: 2,
        postion : 'relative'

    },
    textStyle : {
        fontSize: 20
    }
};

export {Header}