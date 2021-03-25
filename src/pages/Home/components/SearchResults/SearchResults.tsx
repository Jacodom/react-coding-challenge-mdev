import React, { useContext, useEffect, useState } from 'react';

import SearchContext from '../../../../context/search-context';
import useSearchMovies from '../../../../hooks/useSearchMovies';
import MoviesList from '../MoviesList/MoviesList';
import Rating from '../Rating/Rating';

const SearchResults = () => {
    const searchContext = useContext(SearchContext);

    const { data: movies, isLoading, error, refetch } = useSearchMovies({ query: searchContext.searchText })

    const [isStarRatingActive, setIsStarRatingActive] = useState(false);
    const [currentRating, setCurrentRating] = useState(0);
    const filteredMovies = isStarRatingActive ? movies?.filter(movie => movie.vote_average <= currentRating && movie.vote_average >= currentRating - 2) : movies;

    useEffect(() => {
        if (searchContext.searchText.length > 0) {
            refetch()
        }
    }, [searchContext.searchText, refetch])

    return (
        <>
            <div className="search-results my-10"> 
                {
                    error ? <p> { error.message } </p> :
                    isLoading ? <p>Loading... </p> :
                    filteredMovies && filteredMovies?.length > 0 ?
                    <>
                        <div className="search-results__rating-filter-container w-40">
                            <h3 className="mb-2 font-semibold">Filter by rating</h3>
                            <Rating
                                setActive={setIsStarRatingActive}
                                currentRating={currentRating}
                                setCurrentRating={setCurrentRating}
                                isActive={isStarRatingActive}
                            />
                        </div>
                        <div className="search-results__results my-10">
                            <MoviesList movies={ filteredMovies } moviesPerRow={ 6 }/> 
                        </div>
                    </>
                    :
                    <p className="text-3xl my-20"> No movies found with that search and filter criteria </p>
                }
            </div>
        </>
    )
};

export default SearchResults;