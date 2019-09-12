import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { GenreCard } from './';


class Genre extends Component {
    state = { datas: [] };

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=70ae9c6165cbe88e54d99530b069817f&language=en-US')
            .then(response => this.setState({ datas: response.data.genres }));
    }

    renderList() {
        return this.state.datas.map((data,i) => <GenreCard key={data.id} genre={data} />);
    }
    render() {
        // console.log(this.state);
        return (
            <ScrollView style={styles.main}>
                {this.renderList()}
            </ScrollView>
        );
    }
}

const styles = {
    main: {
        marginTop: 0,
    }
}

export default Genre;

