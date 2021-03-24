import React from 'react';
import { Link } from 'react-router-dom';
import { SearchMovie } from '../../../../models/SearchMovies';

type Props = {
    movie: SearchMovie
}

const Movie = ( { movie }: Props ) => {
    const moviePosterUrl = movie.poster_path !== null ? `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${movie.poster_path}` : `/img/not_found.jpg`;

    return (
        <div className="movie w-1/6 mx-5 my-10">
            <Link className="w-full h-full" to={ `/movie-details/${movie.id}` }>
                <div className="movie__content w-full">
                    <div className="movie__content__poster h-80 bg-cover bg-center bg-no-repeat" style={ { backgroundImage: `url(${moviePosterUrl})` } }></div>
                    <div className="movie__content__info text-center mt-4">
                        <p className="movie__content__title font-bold"> { movie.title } </p>
                        <p className="movie__content__year font-normal italic"> { new Date(movie.release_date).getFullYear() } </p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Movie;