import react, {useState, useEffect} from 'react'
import coaches from "../data";
import CoachesCard from "../components/CoachesCard";
function Home() {
    const [coachesArray, setupCoachesArray] = useState([])
    useEffect (()=>{
        fetch('http://localhost:3000/Coaches')
        .then(res => res.json())
        .then(data => setupCoachesArray(data)) 
    }, [] )

    const coachesList = coaches.map(coaches => {
    return <CoachesCard key={coaches.name} specialty={coaches.specialty} bio={coaches.bio} rating={coaches.rating} availability={coaches.availability} ig={coaches.id}/>
    });

    return (
        <>
        <CoachesCard/>
        <main>
            <h1> Home! </h1>
        </main>
        </>
    );
};

export default Home