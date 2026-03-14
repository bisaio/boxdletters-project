import styles from './styles/CreditCardCast.module.css'

interface CreditCardCastProps {
    name: string,
    character?: string
}

export default function CreditCardCast({ name, character }: CreditCardCastProps) {
    return (
        <div
            className={styles.credits}
            data-tooltip-id="movie-tooltip"
            data-tooltip-content={character}
            data-tooltip-place="top"
        >
            <p>{name}</p>
        </div>
    )
}