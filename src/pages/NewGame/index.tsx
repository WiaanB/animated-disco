import React from 'react';
import { Link } from 'react-router-dom';

import { INewGameProps } from './INewGameProps';

const NewGame: React.FunctionComponent<INewGameProps> = () => {
    return (
        <div>
            <h1>New Game</h1>
            <Link to="/">Go back home!</Link>
        </div>
    )
}

export default NewGame;