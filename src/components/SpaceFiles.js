import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/SpaceFiles.css'
import Pilots from "./Pilots";
import { useParams } from "react-router-dom";
import Films from "./Films";

export default function SpaceFiles(props) {
    const { id } = useParams();
    const [ship, setShip] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then(({ data }) => {
                const getData = () => {
                    return new Promise((resolve, reject) => {
                        let newState = { ...data }
                        newState.films = []
                        newState.pilots = []
                        data.films.map(currentFilm => {
                            const url = currentFilm;
                            axios.get(url)
                                .then(({ data }) => {
                                    const getLength = "https://swapi.dev/api/films/".length;
                                    const imgNum = parseInt(data.url.slice(getLength, -1));
                                    const img = `http://starwars-visualguide.com/assets/img/films/${imgNum}.jpg`
                                    const newData = { ...data, img: img };
                                    newState.films.push(newData);
                                })
                        })
                        data.pilots.map(currentPilot => {
                            const url = currentPilot;
                            axios.get(url)
                                .then(({ data }) => {
                                    const getLength = "https://swapi.dev/api/pilots/".length;
                                    const imgNum = parseInt(data.url.slice(getLength, -1));
                                    const img = `http://starwars-visualguide.com/assets/img/characters/${imgNum}.jpg`;
                                    const newData = { ...data, img: img };
                                    newState.pilots.push(newData);
                                })
                        })
                        resolve(newState)
                    })
                }
                getData.then(
                    setShip(newState)
                )
            })
    }, [])
    console.log(ship)
    console.log(ship.films)




    const imgShip = `http://starwars-visualguide.com/assets/img/starships/${id}.jpg`

    return (
        <div className="space-file">
            <img src={imgShip} />
            <div className="container-data">
                <h1>{ship.name}</h1>
                <p>This awesome spaceship has the following specs: </p>
                <div className="container-details">
                    <div>
                        <p><span>Model:</span> {ship.model}</p>
                        <p><span>Cost in credits:</span> {ship.cost_in_credits}</p>
                        <p><span>Atmosphering Speed:</span> {ship.max_atmosphering_speed}</p>
                    </div>
                    <div>
                        <p><span>Manufacturer:</span> {ship.manufacturer}</p>
                        <p><span>Length:</span> {ship.length}</p>
                        <p><span>Crew: </span>{ship.crew}</p>
                    </div>
                </div>
            </div>

            {ship.pilots && <Pilots pilots={ship.pilots} />}
        </div>
    )
}