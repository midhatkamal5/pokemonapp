import React from "react";

function PokemonDetail ({info}){
  return (
    <div className="pokemon-info">
      <div className="mt-2">
        <strong>sprites:</strong>
          <p>Back Default: </p>
          <img src={info.sprites}></img>
          <p>Back Shiny: </p>
          <img src={info.sprites2}></img>
          <p>Front Default: </p>
          <img src={info.sprites3}></img>
      </div>
      <div>
        <strong>Moves:</strong>
        <ul className="list-unstyled">
          {info.moves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
