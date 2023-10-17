import React, { useState, useEffect } from 'react'
import coaches from "../data";
import CoachesCard from "../components/CoachesCard";
import NavBar from './NavBar';

function Home() {
    const [coachesArray, setupCoachesArray] = useState([])
    useEffect (()=>{
        fetch('http://localhost:3000/Coaches')
        .then(res => res.json())
        .then(data => setupCoachesArray(data)) 
    }, [] )
    const coachesList = coachesArray.map(coachObj => {
        return <CoachesCard key={coachObj.name} coach={coachObj} />
    })
    return (
        <>
        <NavBar coaches= {coaches}/>
        
        {coachesList}
        <main>
            <h1> Home! </h1>
        </main>
        </>
    );
};

export default Home