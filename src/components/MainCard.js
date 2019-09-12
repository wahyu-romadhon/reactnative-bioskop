import React from 'react';
import { View, Text } from 'react-native';

const MainCard = (props) => {
    return (
        <View style={Styles.main}>
            <View>
                <Text style={Styles.titleStyle}>
                    {props.movietitle}
                </Text>
            </View>
            <View>
                {props.children}
            </View>

        </View>
    )
}

const Styles = {
    main: {
        width: '70%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 40,
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center'
    }
}
export { MainCard };