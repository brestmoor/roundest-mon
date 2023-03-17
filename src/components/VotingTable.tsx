import React, {ReactElement} from 'react';

const VotingTable = ({children}: {children: ReactElement[]}) => {
    return (
        <div className="rounded-2xl p-10 border border-gray-500 flex gap-24">
            {children}
        </div>
    );
};

export default VotingTable;