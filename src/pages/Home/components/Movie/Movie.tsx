import React from 'react';
import { Link } from 'react-router-dom';
import { SearchMovie } from '../../../../models/SearchMovies';

type Props = {
    movie: SearchMovie | undefined
}

const Movie = ( { movie }: Props ) => {
    const moviePosterUrl = movie?.poster_path !== null ? `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${movie?.poster_path}` : `/img/not_found.jpg`;

    return (
        <div className="movie w-full px-2 py-2">
            <Link className="w-full h-full" to={ `/movie-details/${movie?.id}` }>
                <div className="movie__content w-full">
                    <img className={`${movie?.poster_path === null ? 'h-full' : ''}` } src={ moviePosterUrl } alt={ movie?.title }/>
                    <div className="movie__content__info text-center mt-4">
                        <p className="movie__content__title font-bold"> { movie?.title } </p>
                        <p className="movie__content__year font-normal italic"> { movie ? new Date(movie.release_date).getFullYear() : null } </p>
                        <p className="movie__content__year font-normal italic"> Rating: { movie?.vote_average } </p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Movie;