// import lib
import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

// make component
const Header = (props) => {
    const {
        header,
        title
    } = linovStyle
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{props.headerText}</Text>

        </View>
    )

}

// styling
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#F8F8F8',
            // justfyContent: 'flex-start',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.62,
            elevation: 4
        },
        text1: {
            fontSize: 25
        },
        pic: {
            width: 30,
            height: 30
        }
    }
);

const linovStyle = {
    header: {
        backgroundColor: '#fff',
        color: 'blue',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginTop: '7%',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 9,
    },
    title: {
        color: '#0086b3',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        padding: 7


    }
}

// render
export { Header };

