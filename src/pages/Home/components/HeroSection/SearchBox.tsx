import React, { ChangeEventHandler, useContext } from 'react';

import SearchContext from '../../../../context/search-context';

const SearchBox = () => {

    const searchContext = useContext(SearchContext);

    return (
        <>
            <input value={searchContext.searchText} onChange={ searchContext.inputChangeHandler } type="text" className="italic" placeholder="Search for a movie..." />
        </>
    )
};

export default SearchBox;