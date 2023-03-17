import React from 'react';
import {PokemonData} from "@/components/VotablePokemon";

const Pokemon = ({pokemonData}: {pokemonData: PokemonData}) => {

    if (!pokemonData.url) {
        return <div className="h-72 w-72"></div>
    }

    return (
        <div>
            <img className="h-72 w-72" src={pokemonData.url} title={pokemonData.name}/>
        </div>
    );
};

export default Pokemon;