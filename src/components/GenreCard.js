import React from 'react';
import { Text, View } from 'react-native';
import { GenreTitleCard } from './';

const GenreCard = ( props) => {
    const {
        id, name
    } = props.genre
    return (
        <GenreTitleCard name={name} genreId={id}/>
    )
}

export { GenreCard };