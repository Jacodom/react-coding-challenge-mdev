import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SearchMovie, SearchMovieResponse } from "../models/SearchMovies";



const DISCOVERY_URL = `${process.env.REACT_APP_TMDB_API_BASE_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const discoverMovies = async () => {
    const { data: { results }, }: AxiosResponse<SearchMovieResponse> = await axios.get(DISCOVERY_URL);

    return results;
}

export default function useDiscoveryMovies() {
    return useQuery<SearchMovie[], Error>('discovery-movies', () => discoverMovies())
}