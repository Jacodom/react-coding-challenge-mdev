import React from 'react';
import { SearchMovie } from '../../../../models/SearchMovies';
import Movie from '../Movie/Movie';

type Props = {
    movies: SearchMovie[] | undefined
}

const MoviesList = ( { movies }: Props ) => {
    return (
        <>
            <div className="movies-list flex flex-row flex-wrap justify-evenly">
                {
                    movies?.map(movie => {
                        return (
                                <Movie key={ movie.id.toString() } movie={ movie } />
                            )    
                        })
                }
            </div>
        </>
    )
};

export default MoviesList;