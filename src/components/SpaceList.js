import React from "react";
import '../css/SpaceList.css'

export default function SpaceList(){
    const ship = {
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: "342,953",
        passengers: "843,342",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        hyperdrive_rating: 4.0,
        MGLT: 10,
        starship_class: "Deep Space Mobile Battlestation",
        pilots: [
            "https://swapi.dev/api/people/13/", 
            "https://swapi.dev/api/people/14/", 
            "https://swapi.dev/api/people/25/", 
            "https://swapi.dev/api/people/31/"
        ],
        films: [
            "https://swapi.dev/api/films/1/"
        ],
        created: "2014-12-10T16:36:50.509000Z",
        edited: "2014-12-20T21:26:24.783000Z",
        url: "https://swapi.dev/api/starships/9/"
    };

    const showShips = <div className="list-item">
    <p>{ship.name.toUpperCase()}</p>
    <p>{ship.model}</p>
</div>

    return(
        <div className="space-list">
            {showShips}
            {showShips}
            {showShips}
            {showShips}
            {showShips}
            {showShips}
            {showShips}
            {showShips}
        </div>
    )
}