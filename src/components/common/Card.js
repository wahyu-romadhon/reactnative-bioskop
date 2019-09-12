import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const {
        containerStyle
    } = linovStyle
    return (
        <View style={containerStyle}>
            <View>
                {props.children}
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}
const linovStyle = {
    containerStyle: {
        backgroundColor: '#fff',
        color: 'blue',
        borderRadius: 3,
        marginTop: 5,
        margin: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 9,
        marginLeft: 10,
        marginRight: 10,
    }
}
export { Card };