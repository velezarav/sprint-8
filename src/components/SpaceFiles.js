import axios from "axios";
import React, {useEffect, useState} from "react";
import '../css/SpaceFiles.css'
import Pilots from "./Pilots";
import { useParams } from "react-router-dom";
import Films from "./Films";

export default function SpaceFiles(props) {
    const {id} = useParams();
    const [ship, setShip] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(({data}) => setShip(data))
    },[])

    console.log(ship.pilot)

    const imgShip = `http://starwars-visualguide.com/assets/img/starships/${id}.jpg`


    return(
        <div className="space-file">
            <img src={imgShip} />
            <div className="container-data">
                <h1>{ship.name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
            {ship.films != undefined && <Films films={ship.films}/>}
        </div> 
    )
}