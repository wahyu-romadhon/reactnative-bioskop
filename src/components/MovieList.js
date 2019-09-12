import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { MovieListRender } from './';

class MovieList extends Component {
    state = { datas: [] }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=70ae9c6165cbe88e54d99530b069817f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.props.genreId)
            .then(response => this.setState({ datas: response.data.results }))
    }
    renderList() {
        return this.state.datas.map(data => <MovieListRender key={data.id} movie={data} />)
    }

    render() {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        )
    }
}

export default MovieList;