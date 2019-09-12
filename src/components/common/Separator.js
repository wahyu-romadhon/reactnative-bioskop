import React from 'react';
import { View } from 'react-native';

const Separator = () => {
    const{
        container
    }= linovStyle

    return(
        <View style={container}>

        </View>
    )
}
const linovStyle={
    container:{
        borderColor: '#cccccc',
        borderBottomWidth: 1,
        height:2,
        width: '90%',
        justifyContent:'center',
        alignSelf: 'center'
        
    }
}

export {Separator};