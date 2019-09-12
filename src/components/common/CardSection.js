import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    const {
        container,
        text
    } = linovStyle
    return (
        <View style={container}>
            <Text style={text}>
            {props.children}
            </Text>
        </View>
    )
}
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        backgroundColor: '#F8F8F8'
    }
};

const linovStyle = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        border:10
    },
    text:{
        fontSize: 20
    }

}

export { CardSection };