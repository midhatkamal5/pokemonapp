import React from "react";

function PokemonDetail ({info}){
  return (
    <div className="pokemon-info">
      <div className="mt-2">
        <strong>sprites:</strong>
        <ul className="list-unstyled">
          <img src={info.sprites}></img>
        </ul>
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
