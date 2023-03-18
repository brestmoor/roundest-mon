import React, {useCallback, useEffect, useState} from 'react';
import VotablePokemon, {PokemonData} from "@/components/VotablePokemon";
import VotingTable from "@/components/VotingTable";
import PokemonApi from "@/components/api/PokemonApi";

const RoundestMonContainer = () => {
    const [firstPokemon, setFirstPokemon] = useState<PokemonData>({id: 0, name: ''})
    const [secondPokemon, setSecondPokemon] = useState<PokemonData>({id: 0, name: ''})

    useEffect(() => {
        const loadPokemon = async () => {
            const [first, second] = await PokemonApi.getNewPokemon();
            setFirstPokemon(first)
            setSecondPokemon(second)
        }
        void loadPokemon()
    }, [])

    const onVote = (id: number) => {
        const handleVote = async () => {
            const [[first, second]] = await Promise.all([
                PokemonApi.getNewPokemon(),
                PokemonApi.voteForPokemon(id),
                PokemonApi.downvoteForPokemon([firstPokemon, secondPokemon].find(p => p.id != id)!.id),
            ])
            setFirstPokemon(first)
            setSecondPokemon(second)
        }
        void handleVote()
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-10"></div>
            <VotingTable>
                <VotablePokemon pokemonData={firstPokemon} onClick={onVote}/>
                <VotablePokemon pokemonData={secondPokemon} onClick={onVote}/>
            </VotingTable>
        </div>
    );
};

export default RoundestMonContainer;