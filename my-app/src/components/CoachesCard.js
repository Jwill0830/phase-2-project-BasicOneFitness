function CoachesCard({coaches}) {
    return (
        <article>
            <h2>{coaches.name}</h2>
            <h2>{coaches.specialty}</h2>
            <h2>{coaches.bio}</h2>
            <h2>{coaches.rating}</h2>
            <h2>{coaches.availability}</h2>
            <h2>{coaches.ig}</h2>
            <h2>{coaches.image}</h2>
        </article>
    )
}

export default CoachesCard