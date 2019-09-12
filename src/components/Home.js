import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, Button } from './common';
import { MainCard } from './';
import axios from 'axios';



class Home extends Component {

    render() {
        return (
            <View style={styles.main}>
                <MainCard movietitle="Film Bioskop">
                    <Button title="Mulai" onPress={() => Actions.Genre()} />
                </MainCard>
            </View>

        )
    }
}

const styles = {
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: 'bold'
    }
}

export default Home;

