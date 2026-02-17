import { useEffect, useState } from "react";
import type Movie from "../interfaces/Movie";
import MovieCard from "../components/layout/MovieCard";
import styles from './Home.module.css'

const moviesURL = import.meta.env.VITE_API
const apiRAtoken = import.meta.env.VITE_API_RA_TOKEN;

export default function Home() {
    const [topMovies, setTopMovies] = useState<Movie[] | []>([]);

    const getTopRatedMovies = async (url: string) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiRAtoken}`
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedMoviesURL = `${moviesURL}top_rated`
        getTopRatedMovies(topRatedMoviesURL);
    }, [])

    return (
        <>
            {/* <p>teste</p> */}
            <div className={styles.container}>
                {topMovies && topMovies.map(movie => <MovieCard id={movie.id} key={movie.id} title={movie.title} original_title={movie.original_title} poster_path={movie.poster_path} />)}
            </div>
        </>
    )
}