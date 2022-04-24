import React from "react";
import '../css/SpaceFiles.css'
import Pilots from "./Pilots";

export default function SpaceFiles() {
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

    const imgShip = "http://starwars-visualguide.com/assets/img/starships/9.jpg"


    return(
        <div className="space-file">
            <img src={imgShip} />
            <div className="container-data">
                <h1>{ship.name.toUpperCase()}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porttitor magna, vitae lobortis nulla. Fusce ligula eros, rhoncus tempus ultrices et, pretium ut orci. Vivamus blandit semper efficitur. Donec consectetur faucibus est a laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vulputate leo eu ultricies accumsan. Mauris tincidunt gravida molestie. Sed quis arcu lacus. Integer elementum a ante id dignissim. Integer erat metus, lobortis nec ante nec, faucibus luctus lectus. Nam bibendum venenatis arcu, ut tincidunt eros rhoncus id. Aliquam cursus nulla elementum, varius est ac, ultrices arcu. Sed consequat feugiat turpis sit amet finibus. Proin non sodales sapien, vitae aliquam arcu. Nunc pellentesque ipsum sed lorem dignissim, sollicitudin tempus leo fringilla. Curabitur at congue tortor.</p>
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
            {/* <Pilots ship={ship}/> */}
        </div> 
    )
}