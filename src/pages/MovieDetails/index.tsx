import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';

const MovieDetails = () => {

    const { movieId } = useParams<{movieId: string}>();
    const { data: movie, isLoading, error } = useMovieDetails(movieId);

    const moviePosterUrl = movie?.poster_path !== null ? `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${movie?.poster_path}` : `/img/not_found.jpg`;

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className="movie-details h-screen">
                {
                    error ? <p> { error.message } </p> :
                    isLoading ? <p>Loading...</p> :
                    <> 
                        <div className="movie-details__hero h-full bg-cover bg-right-top bg-no-repeat relative z-0" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w533_and_h300_bestv2${{ ...movie }?.backdrop_path})` }}>
                            <div className="movie-details__hero__blackdrop bg-black bg-opacity-80 absolute top-0 h-full w-full z-10"></div>
                            <div className="grid gap-5 grid-cols-10 container mx-auto py-20 z-20 relative">
                                <div className="col-span-2 col-start-2">
                                    <div className="p-2 bg-white rounded-md">
                                        <img className={`${movie?.poster_path === null ? 'h-full' : ''}`} src={moviePosterUrl} alt={movie?.title} />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="movie-details__hero__info text-white">
                                        <h1 className="text-4xl font-extrabold pb-2"> { movie?.title }</h1>
                                        <h2 className="text-xl italic text-gray-400 pb-3"> { movie?.tagline } </h2>
                                        <h2> { movie? new Date(movie.release_date).toLocaleDateString('en') : null } - { movie?.genres.map((genre) => <span className="font-normal p-1 bg-yellow-500 mr-2 rounded-md" key={genre.name}> {genre.name} </span>) } </h2>
                                        <h2 className="text-xl italic font-semibold pb-3 pt-4">Overview</h2>
                                        <p className="text-lg"> { movie?.overview } </p>
                                    </div>
                                    <div className="mt-8">
                                        <Link to="/" className="text-white underline">Go Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
};

export default MovieDetails;