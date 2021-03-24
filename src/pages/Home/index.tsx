import React, { ChangeEventHandler, useEffect, useState } from 'react';

import HeroSection from './components/HeroSection/HeroSection';
import Reccomendations from './components/Reccomendations/Reccomendations';
import SearchResults from './components/SearchResults/SearchResults';

import SearchContext from '../../context/search-context';

const Home = () => {

    const [searchText, setSearchText] = useState('');
    const [isSearchTextEmpty, setIsSearchTextEmpty] = useState(true);

    const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        setIsSearchTextEmpty(searchText.length === 0);
    }, [searchText]);

    return (
        <>
            <SearchContext.Provider value={ {inputChangeHandler: handleSearchTextChange, searchText: searchText} }>
                <div className="home-container md:container md:mx-auto">
                    <HeroSection /> 
                    {isSearchTextEmpty ? <Reccomendations /> : <SearchResults /> }                
                </div>
            </SearchContext.Provider>
        </>
    )
};

export default Home;