import React from 'react';
import useDiscoveryMovies from '../../../../hooks/userDiscoveryMovies';
import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';

const Reccomendations = () => {

    const { data: movies, isLoading, error, refetch } = useDiscoveryMovies();

    const [mostPopularMovie, ...popularMovies] = movies ? movies?.filter((v, i) => i < 11) : [];

    return (
        <>
            {
                error ? <p> { error.message } </p> :
                isLoading ? <p>Loading...</p> :
                movies && movies.length > 0 ? 
                <div className="reccomendations gap-4 my-20">
                    <div className="reccomendations__title mb-5">
                        <h1 className="text-3xl font-semibold">🔥 Most popular movies</h1>
                    </div>
                    <div className="reccomendations__movies grid grid-cols-3">
                        <div className="reccomendations__movies__most-popular flex-grow col-span-1">
                            <Movie movie={ mostPopularMovie } />
                        </div>
                        <div className="reccomendations__movies__other-popular col-span-2">
                            <MoviesList movies={ popularMovies } moviesPerRow={ 5 } />
                        </div>
                    </div>
                </div>
                :
                <p className="text-3xl my-20"> No movies found with that search and filter criteria </p>
            }
        </>
    )
};

export default Reccomendations;