import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/movie-details/:movieId" component={ MovieDetails }/>
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </>
    )
};

export default AppRouter;