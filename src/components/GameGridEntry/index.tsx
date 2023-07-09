import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

import './style.scss';

import { IGameGridEntryProps } from './IGameGridEntryProps';

const GridGameEntry: React.FunctionComponent<IGameGridEntryProps> = props => {

    const handleViewGame = () => {
        console.log(`Viewing game: ${props.game.id}`);
    };

    const handleLeaveGame = () => {
        console.log(`Leaving game: ${props.game.id}`);
    };

    return (
        <>
            <div className='gameGridEntry'>
                <div className='player-table'>
                    <h2>Players:</h2>
                    <DataTable value={props.game.players} stripedRows scrollable scrollHeight="400px" tableStyle={{ minWidth: '50%' }}>
                        <Column field="username" header="Username"></Column>
                        <Column field="first_name" header="Name"></Column>
                        <Column field="last_name" header="Lastname"></Column>
                    </DataTable>
                </div>
                <div className='biggest-loser'>
                    <h2>Most Nailed:</h2>
                    <h3>
                        {props.game.players[0].username}
                    </h3>
                    <p>He has goofed a total of $hardcoded_value times. I can't believe he's being this dumb!</p>
                </div>
                <div className='game-progress'>
                    <h2>Game Progress:</h2>
                    <Knob value={(props.game.current_score / props.game.goalpost) * 100} disabled min={0} max={100} />
                </div>
                <Button label='View Game' className="view-button" severity="info" onClick={handleViewGame} />
                <Button label='Leave Game' className='leave-button' severity="danger" onClick={handleLeaveGame} />
            </div>
        </>
    )
};

export default GridGameEntry;