import React, { useEffect, useState } from "react";
import '../css/SpaceFiles.css'

export default function Pilots({ pilots }) {

  const singlePilot = pilots.map(pilot => <div key={pilot.url} className="pilots-films">
    <img src={pilot.img} />
    <p>{pilot.name}</p>
  </div>)

  return (
    <div className="films-container">
      {pilots.length > 0 && <h5>GUIDED BY:</h5>}
      {singlePilot}
    </div>
  )
}