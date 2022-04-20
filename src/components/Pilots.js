import React from "react";
import '../css/SpaceFiles.css'

export default function Pilots(props) {

    const singlePilot = props.ship.pilots.map(item => <p>{item}</p>)

    return(
        <div className="pilots-films">
            <h5>PILOTS</h5>
            <p>{singlePilot}</p>
        </div>
    )
}