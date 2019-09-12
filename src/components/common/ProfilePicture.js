import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ProfilePicture = () => {
    const {
        container,
        initialName
    } = linovStyle

    return (
        <View style={container}>
            <View>
                <Text style={initialName}>
                    JR
                </Text>
            </View>

        </View>
    )
}

const linovStyle = {
    container: {
        backgroundColor: '#e6e6ff',
        marginTop: 10,
        borderRadius: 10,
        width: 130,
        height: 150,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    initialName: {
        color: '#0086b3',
        fontSize: 50

    }
}

export { ProfilePicture }