import React from 'react';
import {Result} from "@/components/results/ResultsTable";

const ResultBar = ({result}: {result: Result}) => {

    const roundnessPercent = Math.round(result.roundness * 100);
    const closestColor = Math.round(((result.roundness * 500) / 100)) * 100;

    console.log(closestColor)

    return (
        <div className="relative border border-gray-500 w-64 px-5 py-3 rounded flex justify-between">
            <div style={{width: `${roundnessPercent}%`}} className={`absolute -z-10 h-full top-0 left-0 bg-emerald-500`}></div>
            <div className="">{result.name}</div>
            <div className="">{roundnessPercent} %</div>
        </div>
    );
};

export default ResultBar;