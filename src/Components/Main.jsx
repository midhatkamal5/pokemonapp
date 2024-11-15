import React, { useState } from "react";
import Tile from "./Tile";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  const [tiles, setTiles] = useState({
    tile1: { number: 1, pokemonInfo: null },
    tile2: { number: 2, pokemonInfo: null },
    tile3: { number: 3, pokemonInfo: null },
    tile4: { number: 4, pokemonInfo: null },
    tile5: { number: 5, pokemonInfo: null },
    tile6: { number: 6, pokemonInfo: null },
    tile7: { number: 7, pokemonInfo: null },
    tile8: { number: 8, pokemonInfo: null },
    tile9: { number: 9, pokemonInfo: null },
    tile10: { number: 10, pokemonInfo: null },
    tile11: { number: 11, pokemonInfo: null },
    tile12: { number: 12, pokemonInfo: null },


  });

  async function fetchPokemonData(tileKey){
    const tile = tiles[tileKey];
    const pokemonId = tile.number; 

    //If information is shown then revert it to own status
    if (tile.pokemonInfo) {
      setTiles((prevTiles) => ({
        ...prevTiles,
        [tileKey]: { ...tile, pokemonInfo: null },
      }));
    } else {
     
      try {
        const movesList = [];
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if(!response.ok)
          {
            console.log("Http status not 200");
          }
        const data = await response.json();
        
        for (let i = 0; i < 3 && i < data.moves.length; i++) {
          movesList.push(data.moves[i].move.name);
        }
        
        const pokemonInfo = {
          name: data.name,
          moves: movesList,
          sprites: data.sprites.back_default,
          sprites2: data.sprites.back_shiny,
          sprites3: data.sprites.front_default

          };


          setTiles((prevTiles) => ({
          ...prevTiles,[tileKey]: { ...tile, pokemonInfo },
        }));
      } 
      catch (error) {
        console.log("Error fetching the data: ", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
      <img src="pokeball.png"></img>
        <h1>Which Pokemon Character are you? </h1>
        <h3>Click on the tile to reveal a Pokemon character: </h3>
        <br/>
        {Object.keys(tiles).map((tileKey) => {
          const tile = tiles[tileKey];
          return (
            <Tile
              key={tileKey}
              number={tile.number}
              pokemonInfo={tile.pokemonInfo}
              onClick={() => fetchPokemonData(tileKey)} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;


