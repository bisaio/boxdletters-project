import type MovieCredits from '../../interfaces/MovieCredits'
import CreditCardCast from './CreditCardCast'
import styles from './styles/CreditCardCast.module.css'

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
        <>
            {
                Object.entries(crewByDepartment).map(([department, members]) =>
                    <div key={department}>
                        <h3>{department}</h3>

                        {members.map(member =>
                            <CreditCardCast name={member.name} />
                        )}
                    </div>
                )
            }
        </>
    )
}