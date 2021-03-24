import React, { useContext } from 'react';

import SearchContext from '../../../../context/search-context';

const SearchResults = () => {
    const searchContext = useContext(SearchContext);

    return (
        <>
            <h1>search results</h1>
            <p>{ searchContext.searchText }</p>
        </>
    )
};

export default SearchResults;