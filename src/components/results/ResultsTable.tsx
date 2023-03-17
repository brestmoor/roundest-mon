import React, {useEffect, useState} from 'react';
import ResultsApi from "@/components/results/ResultsApi";
import ResultBar from "@/components/results/ResultBar";

export type Result = {
    id: number,
    name: string,
    roundness: number,
}

const ResultsTable = ({results}: {results: Result[]}) => {
    // useEffect(() => {
    //     const loadTop3 = async () => {
    //         const top3 = await ResultsApi.getTop3();
    //         console.log(top3)
    //         setResults(top3)
    //     }
    //     void loadTop3();
    // }, [])

    return (
        <div className="flex flex-col gap-3">
            {results.map(r => <ResultBar key={r.id} result={r}/>)}
        </div>
    );
};

export default ResultsTable;