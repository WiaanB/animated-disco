import React from 'react';
import { Link } from 'react-router-dom';

import { IAllGamesProps } from './IAllGamesProps';

const AllGames: React.FunctionComponent<IAllGamesProps> = () => {
    return (
        <div>
            <h1>My Games</h1>
            <Link to="/">Go back home!</Link>
        </div>
    )
}

export default AllGames;