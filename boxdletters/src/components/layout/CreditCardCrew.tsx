import type MovieCredits from '../../interfaces/MovieCredits'
import styles from './styles/CreditCardCast.module.css'

type CreditCardCrewProps = {
    crew: MovieCredits["crew"]
}

export default function CreditCardCrew({ crew }: CreditCardCrewProps) {
    const department_list = [...new Set(crew.map(c => c.department))];
    
    return (
        <div
            className={styles.credits}
        >
            <p>teste</p>
        </div>
    )
}