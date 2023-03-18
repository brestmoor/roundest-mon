import React, {ReactElement} from 'react';

const VotingTable = ({children}: {children: ReactElement[]}) => {
    return (
        <div className="rounded-2xl p-4 xl:p-10 border border-gray-500 flex gap-4 xl:gap-24 mx-2 mb-2 shadow-xl lg:shadow-2xl">
            {children}
        </div>
    );
};

export default VotingTable;