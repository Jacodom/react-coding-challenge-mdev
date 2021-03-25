import React from 'react';
import { SearchMovie } from '../../../../models/SearchMovies';
import Movie from '../Movie/Movie';

type Props = {
    movies: SearchMovie[] | undefined
    moviesPerRow: number
}

const MoviesList = ( { movies, moviesPerRow }: Props ) => {
    return (
        <>
            <div className={`movies-list grid grid-cols-${moviesPerRow} gap-4`}>
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