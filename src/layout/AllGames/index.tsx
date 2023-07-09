import React from "react";

import { Accordion, AccordionTab } from 'primereact/accordion';

import { IAllGamesProps } from './IAllGamesProps';

import GameGridEntry from '@/components/GameGridEntry';

const AllGames: React.FunctionComponent<IAllGamesProps> = props => {

    return (
        <>
            <Accordion multiple>
                {props.games.map(game => <AccordionTab key={game.id} header={game.name}><GameGridEntry game={game} /></AccordionTab>)}
            </Accordion>
        </>
    )
};

export default AllGames;