import React, {useCallback, useEffect, useState} from 'react';
import VotablePokemon, {PokemonData} from "@/components/VotablePokemon";
import VotingTable from "@/components/VotingTable";
import PokemonApi from "@/components/api/PokemonApi";

const RoundestMonContainer = () => {
    const [firstPokemon, setFirstPokemon] = useState<PokemonData>({id: 0, name: ''})
    const [secondPokemon, setSecondPokemon] = useState<PokemonData>({id: 0, name: ''})

    const loadPokemon = useCallback(async () => {
        const [first, second] = await PokemonApi.getNewPokemon();
        setFirstPokemon(first)
        setSecondPokemon(second)
    }, [])

    useEffect(() => {
        void loadPokemon()
    }, [loadPokemon])


    const onVote = (id: number) => {
        const handleVote = async () => {
            await Promise.all([
                PokemonApi.voteForPokemon(id),
                PokemonApi.downvoteForPokemon([firstPokemon, secondPokemon].find(p => p.id != id)!.id)
            ])
            await loadPokemon()
        }
        void handleVote()
    }

    return (
        <div className="flex flex-col justify-center items-center">
            Which Pokemon is more round?
            <div className="h-10"></div>
            <VotingTable>
                <VotablePokemon pokemonData={firstPokemon} onClick={onVote}/>
                <VotablePokemon pokemonData={secondPokemon} onClick={onVote}/>
            </VotingTable>
        </div>
    );
};

export default RoundestMonContainer;