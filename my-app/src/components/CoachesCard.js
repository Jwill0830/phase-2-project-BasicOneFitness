function CoachesCard({coach}) {
    return (
        <article>
            <h2>{coach.name}</h2>
            <h2>{coach.specialty}</h2>
            <h2>{coach.bio}</h2>
            <h2>{coach.rating}</h2>
            <h2>{coach.availability}</h2>
            <h2>{coach.ig}</h2>
            <h2>{coach.image}</h2>
        </article>
    )
}

export default CoachesCard