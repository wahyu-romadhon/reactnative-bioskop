import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const GenreTitleCard = (props) => {
    const {
        cardStyle,
        textStyle
    } = styles;

    return (
        <View>
            <TouchableOpacity style={cardStyle} idmovie={props.idmovie} onPress={() => Actions.MovieList({ genreId: props.genreId })}>
                <Text style={textStyle}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = {
    cardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 3,
        backgroundColor: '#ffffff',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        marginBottom: 7
    },
    textStyle: {
        fontSize: 30
    }

}

export { GenreTitleCard };