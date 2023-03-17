import React from 'react';
import ResultsTable, {Result} from "@/components/results/ResultsTable";
import ResultsApi from "@/components/results/ResultsApi";
import getTopVotedPokemon from "@/backend/topVotedPokemon";

const Results = (props: {results: Result[]}) => {
    return (
        <div>
            <ResultsTable results={props.results}/>
        </div>
    );
};

export default Results;

export async function getServerSideProps(context: any) {
    const top3Pokemon = await getTopVotedPokemon();
    return {
        props: {
            results: top3Pokemon
        }
    }
}