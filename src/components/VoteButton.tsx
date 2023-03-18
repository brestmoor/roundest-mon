import React, {ReactEventHandler} from 'react';

const VoteButton = ({onClick}: {onClick: ReactEventHandler}) => {
    return (
        <button onClick={onClick} className="rounded-2xl border border-gray-500 p-2 hover:bg-emerald-500 hover:border-white transition">Roundest</button>
    );
};

export default VoteButton;