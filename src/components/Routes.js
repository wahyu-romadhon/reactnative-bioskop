import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home';
import Genre from './Genre';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const Routes = () => (
    <Router>
        <Scene>
            <Scene
                key="Home"
                component={Home}
                title="Home"
                hideNavBar
                initial
            />
            <Scene
                key="Details"
                component={MovieDetails}
                title="Movie Details"
                hideNavBar
            />
            <Scene
                key="Genre"
                component={Genre}
                title="Genre"
                hideNavBar
            />
            <Scene
                key="MovieList"
                component={MovieList}
                title="Movie List"
                hideNavBar
            />
        </Scene>
    </Router>
)
export default Routes;