import React from 'react';
import { Text, View } from 'react-native';
import {MovieCard} from './';

const MovieListRender = ({movie}) => {
    const{
        id,
        title
    } = movie

    return (
        <MovieCard title={title} movieId={id}/>
    )
}
export { MovieListRender };