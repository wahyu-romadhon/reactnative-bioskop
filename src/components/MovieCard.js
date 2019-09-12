import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, Image, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class MovieCard extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/' + this.props.movieId + '?api_key=70ae9c6165cbe88e54d99530b069817f&language=en-US')
            .then(response => this.setState({ movie: response.data }));
    }
    render() {
        const {
            card
        } = Styles

        return (
            <ScrollView>
                <ImageBackground source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.state.movie.backdrop_path }} style={{ width: '100%', height: '93%' }}>
                    <TouchableOpacity onPress={() => Actions.Details({ movieId: this.props.movieId, title: this.props.title, movie: this.state.movie })} style={card}>
                        <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.state.movie.poster_path }} style={{ width: 50, height: 50, borderRadius: 5 }} />
                        <View style={Styles.textFormation}>
                            <Text style={Styles.textStyle}>
                                {this.props.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        )
    }
}
const Styles = {
    card: {
        flexDirection: 'row',
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
        fontSize: 20
    },
    textFormation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { MovieCard };
