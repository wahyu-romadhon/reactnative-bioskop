import React, { Component } from 'react';
import { View, Text, Image, ImageBackground,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Header } from './common';


class MovieDetails extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: props.movie
    //     }
    // }
    


    state = {
        movie: null
    }
    // const thistest= () => {
    //     test = {}
    // }
    // const test1 = (props) => {
    //     const test2 = props.movie;
    //     // id,
    //     // title,
    //     // adult,
    //     // backdrop_path,
    //     // poster_path
    //     // return props.movie
    //     return (
    //         <Text>{test2.title}</Text>
    //     )
    // };

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/' + this.props.movieId + '?api_key=70ae9c6165cbe88e54d99530b069817f&language=en-US')
            .then(response => this.setState({ movie: response.data }));
    }
    render() {
        const {
            id,
            title,
            adult,
            backdrop_path,
            poster_path
        } = this.props.movie
        console.log(this.state.movie)
        return (
            <View>
            <Header headerText={title} />
            <ScrollView>
                <ImageBackground source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster_path }} style={{ height:1000, width: '100%'}}>
                    <LinearGradient
                        colors={['transparent','#000','#000']}
                        style={{ width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:25,color:'#fff'} }>
                                {title}
                                {/* {this.state.movie.title} */}
                            </Text>
                        </LinearGradient>
                </ImageBackground>
            </ScrollView>
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
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
}

export default MovieDetails;

