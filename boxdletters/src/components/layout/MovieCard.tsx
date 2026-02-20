import { Link } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './styles/MovieCard.module.css'

interface MovieCardProps {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
}

const moviesIMG = import.meta.env.VITE_IMG

export default function MovieCard({ id, title, release_date, poster_path }: MovieCardProps) {

    const release_year = new Date(release_date).getFullYear();

    return (
        <>
            <Link to={`/movie/${id}`} >
                <div
                    key={id}
                    className={styles.container}
                    data-tooltip-id="movie-tooltip"
                    data-tooltip-content={`${title} (${release_year})`}
                    data-tooltip-place="top">
                    <div className={styles.card}>
                        <img src={`${moviesIMG}${poster_path}`} alt={title} />
                    </div>
                </div>
            </Link>
        </>
    )
}