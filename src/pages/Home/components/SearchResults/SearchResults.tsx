import React, { useContext, useEffect } from 'react';

import SearchContext from '../../../../context/search-context';
import useSearchMovies from '../../../../hooks/useSearchMovies';
import MoviesList from '../MoviesList/MoviesList';

const SearchResults = () => {
    const searchContext = useContext(SearchContext);

    const { data: movies, isLoading, error, refetch } = useSearchMovies({ query: searchContext.searchText })

    useEffect(() => {
        refetch()
    }, [searchContext.searchText, refetch])

    return (
        <>
            {
                error ? <p> { error.message } </p> :
                isLoading ? <p>Loading... </p> :
                movies && movies?.length > 0 ? <MoviesList movies={ movies } /> :
                <p className="text-3xl my-20"> No movies found with that search and filter criteria </p>
            }
        </>
    )
};

export default SearchResults;