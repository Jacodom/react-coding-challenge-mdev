import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SearchMovie, SearchMovieResponse } from "../models/SearchMovies";

const SEARCH_URL: string = `${process.env.REACT_APP_TMDB_API_BASE_ENDPOINT}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false`;

type SearchParameters = {
    query: string;
}

const searchMovies = async ( { query }: SearchParameters ) => {

    const { data: { results }, }: AxiosResponse<SearchMovieResponse> = await axios.get(`${SEARCH_URL}&query=${query}`);

    return results;
}

export default function useSearchMovies( { query }: SearchParameters ) {
    return useQuery<SearchMovie[], Error>('search-movies', () =>
        searchMovies( { query } )
    );
}