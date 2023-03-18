import React, {MouseEventHandler, ReactEventHandler} from 'react';
import PokemonImg from "@/components/Pokemon";
import VoteButton from "@/components/VoteButton";
import Pokemon from "@/components/Pokemon";

export type PokemonData = {
    id: number,
    url?: string
    name: string
}

type VoteHandler = (id: number) => void

const VotablePokemon = ({pokemonData, onClick}: {pokemonData: PokemonData, onClick: VoteHandler}) => {

    const onVote = () => {
        onClick(pokemonData.id)
    }

    return (
        <div className="flex flex-col gap-4 xl:gap-12">
            <PokemonImg pokemonData={pokemonData}/>
            <VoteButton onClick={onVote}/>
        </div>
    );
};

export default VotablePokemon;