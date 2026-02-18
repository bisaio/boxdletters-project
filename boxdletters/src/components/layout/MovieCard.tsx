import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import styles from './styles/MovieCard.module.css'
import { Link } from 'react-router-dom'

interface MovieCardProps {
    id: number,
    title: string,
    original_title: string,
    poster_path: string,
}

const moviesIMG = import.meta.env.VITE_IMG

export default function MovieCard({ id, title, original_title, poster_path }: MovieCardProps) {


    return (
        <>
            {/* https://react-tooltip.com/docs/getting-started -> para estilzar o tooltop */}
            <Tooltip id="my-tooltip" />
            <Link to={`/movie/${id}`} >
                <div
                    key={id}
                    className={styles.container}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${title} ${original_title !== title ? (`(${original_title})`) : ("")}`}
                    data-tooltip-place="top">
                    <div className={styles.card}>
                        <img src={`${moviesIMG}${poster_path}`} alt={title} />
                    </div>
                </div>
            </Link>
        </>
    )
}