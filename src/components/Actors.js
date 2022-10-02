import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => {
    return <div key={actor.name}>
      <p>Name: {actor.name}</p>
      <ul>
        {actor.movies.map((movie) => {return <li key={movie}>{movie}</li>})}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  )
}

export default Actors;