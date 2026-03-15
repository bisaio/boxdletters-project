import type MovieCredits from '../../interfaces/MovieCredits'
import CreditCardCast from './CreditCardCast'
import styles from './styles/CreditCardCrew.module.css'

type CreditCardCrewProps = {
    crew: MovieCredits["crew"]
}

export default function CreditCardCrew({ crew }: CreditCardCrewProps) {
    const crewByDepartment = crew.reduce((acc, member) => {
        const dept = member.department;

        if (!acc[dept]) {
            acc[dept] = [];
        }

        acc[dept].push(member);

        return acc;
    }, {} as Record<string, MovieCredits["crew"]>)


    return (
        <div className={styles.container}>
            {
                Object.entries(crewByDepartment).map(([department, members]) =>
                    <div key={department} className={styles.crew_container}>
                        <div>
                            <h3>{department}</h3>
                        </div>
                        <div>
                            {members.map(member =>
                                <CreditCardCast name={member.name} />
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}