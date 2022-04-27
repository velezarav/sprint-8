import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/SpaceFiles.css'

export default function Pilots({pilots}) {

    const [selectedPilots, setSelectedPilots] = useState([])

    const getLength = "https://swapi.dev/api/people/".length;

    useEffect(() => {
        let newArray = []
        pilots.map(pilot => {
            axios.get(pilot)
            .then(({data}) => {
                const imgNum = parseInt(data.url.slice(getLength, -1))
                const img = `http://starwars-visualguide.com/assets/img/characters/${imgNum}.jpg`
                const newData = {...data, img: img}
                newArray.push(newData)
            })
        })
        setSelectedPilots(newArray)
    }, [])

    const singlePilot = selectedPilots.map(pilot => <div key={pilot.url} className="pilots-films">
                        <img src={pilot.img}/>
                        <p>{pilot.name.toUpperCase()}</p>
                    </div>)

    return(
        <div className="films-container">
            <h5>GUIDED BY:</h5>
            {singlePilot}
        </div>
    )
}