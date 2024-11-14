import React from "react";
import PokemonInfo from "./PokemonDetail";

function Tile({ number, pokemonInfo, onClick }){
  return (
    <div className="col-md-2 mb-4">
      <div className="card p-3" onClick={onClick}>
        <div className="card-body text-center">
          <h5 className="card-title">{pokemonInfo ? pokemonInfo.name : number}</h5>
          {pokemonInfo && <PokemonInfo info={pokemonInfo} />}
        </div>
      </div>
    </div>
  );
};

export default Tile;
