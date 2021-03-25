
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { MovieDetails } from "../models/MovieDetails";


const getMovieDetails = async ( movieId: string ) => {
    const movieUrl = `${process.env.REACT_APP_TMDB_API_BASE_ENDPOINT}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    const { data }: AxiosResponse<MovieDetails> = await axios.get(movieUrl);

    return data;
}

export default function useMovieDetails( movieId: string ) {
    return useQuery<MovieDetails, Error>('movie-details', () => getMovieDetails( movieId ));
}