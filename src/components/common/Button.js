import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({onPress,title}) =>{
    const{
        buttonStyle,
        textStyle
    } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        padding:15
    },
    buttonStyle:{
        // flex:1,
        alignSelf:'stretch',
        backgroundColor: '#99b3ff',
        borderRadius:15,
        borderWidth:1,
        borderColor: '#668cff',
        marginLeft:5,
        marginRight:5

    }
};

export {Button};