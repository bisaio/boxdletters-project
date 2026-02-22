import { useState } from 'react'
import styles from './styles/SearchResult.module.css'

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
        <div className={styles.container}>
            <div className={styles.poster}>
                {!imageLoaded && <div className={styles.skeleton}>{`${title} (${release_year})`}</div>}

                <img
                    src={`${moviesIMG}${poster_path}`}
                    alt={title}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <div className={styles.info}>
                <p><span>{title}</span> {release_year}</p>
                <p>{original_title !== title && `Orignal title: ${original_title}`}</p>
            </div>
        </div>
    )
}