import { useState } from 'react'
import styles from './styles/SearchResult.module.css'
import { Link } from 'react-router-dom';

interface SearchResultProps {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    original_title: string
}

const moviesIMG = import.meta.env.VITE_IMG

export default function SearchResult({ id, title, release_date, poster_path, original_title }: SearchResultProps) {

    const [imageLoaded, setImageLoaded] = useState(false);

    const release_year = new Date(release_date).getFullYear();

    return (
        <div className={styles.container_search_result}>
            <div className={styles.poster}>
                <Link to={`/movie/${id}`}>
                    {!imageLoaded ? <div className={styles.skeleton}>{`${title} (${release_year})`}</div> : ""}

                    <img
                        src={`${moviesIMG}${poster_path}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </Link>
            </div>
            <div className={styles.info}>
                <p><Link to={`/movie/${id}`}><span>{title}</span></Link>{release_year}</p>
                <p>{original_title !== title && `Orignal title: ${original_title}`}</p>
            </div>
        </div>
    )
}