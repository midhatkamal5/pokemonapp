import React, { useState } from "react";
import Tile from "./Tile";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Initialize state with an object for each tile
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

  // Fetch data for the selected Pokémon based on its tile number
  const fetchPokemonData = async (tileKey) => {
    const tile = tiles[tileKey];
    const pokemonId = tile.number; // Use the tile number to fetch corresponding Pokémon data

    // If the tile already has Pokémon info, reset it back to just showing the number.
    if (tile.pokemonInfo) {
      setTiles((prevTiles) => ({
        ...prevTiles,
        [tileKey]: { ...tile, pokemonInfo: null },
      }));
    } else {
      // Dynamically fetch Pokémon data based on the tile's number
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
                
        const pokemonInfo = {
          name: data.name,
          moves: data.moves.slice(0, 3).map(move => move.move.name),
          sprites: data.sprites.back_default
          };

        // Update the state to show Pokémon info for the clicked tile
        setTiles((prevTiles) => ({
          ...prevTiles,
          [tileKey]: { ...tile, pokemonInfo },
        }));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
      <img src="https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png"></img>

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
              onClick={() => fetchPokemonData(tileKey)} // Handle tile click event
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;


