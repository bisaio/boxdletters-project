import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import searchMovies from "../utils/searchMovies";
import type Movie from "../interfaces/Movie";
import MovieCard from "../components/layout/MovieCard";

export default function Search() {
    const location = useLocation();
    const { search: searchText } = location.state;

    const [movies, setMovies] = useState<Movie[]>();

    useEffect(() => {
        let is_mounted = true;

        const fetchSearchedMovie = async (search: string) => {
            try {
                const search_results = await searchMovies(search);
                setMovies(search_results.results);
            } catch (error) {
                console.error("ERROR FETCHING DATA: ", error)
            }
        }

        is_mounted && fetchSearchedMovie(searchText)

        return () => {
            is_mounted = false
        }
    }, [searchText])

    return (
        <div>
            <h1>Results for {searchText}</h1>
            {movies && (
                movies.map(movie => 
                    <MovieCard id={movie.id} key={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
                )
            )}
        </div>
    )
}