import React, { ChangeEventHandler } from 'react';

type SearchContextDefault = {
    inputChangeHandler: ChangeEventHandler<HTMLInputElement>,
    searchText: string;
}

const SearchContextDefaultValue: SearchContextDefault = {
    inputChangeHandler: () => {},
    searchText: ''
}

const searchContext = React.createContext(SearchContextDefaultValue);

export default searchContext;