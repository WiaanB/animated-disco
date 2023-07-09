import React from 'react';

import { IAllGamesProps } from './IAllGamesProps';
import Game from '@/interfaces/Game';
import Player from '@/interfaces/Player';
import GameOptions from '@/interfaces/GameOptions';

import Navbar from '@/layout/Navbar';
import AllGamesLayout from '@/layout/AllGames';

const players: Player[] = [
    {
        id: 1,
        username: "player1",
        first_name: "Player",
        last_name: "One",
        email: "playerone@email.com",
        admin_rights: true
    },
    {
        id: 2,
        username: "player2",
        first_name: "Player",
        last_name: "Two",
        email: "playertwo@email.com",
        admin_rights: false,
    },
    {
        id: 3,
        username: "player3",
        first_name: "Player",
        last_name: "Three",
        email: "playerthree@email.com",
        admin_rights: false,
    }
];

const options: GameOptions = {
    id: 1,
    streak_multiplier: 1.5,
    value_identifier: "R",
    pry_threshold: 3,
    increments: 10
};

const games: Game[] = [
    {
        id: 1,
        name: "Game 1",
        created_at: Date.now().toString(),
        players: players,
        game_settings: options,
        goalpost: 400,
        current_score: 300
    },
    {
        id: 2,
        name: "Game 2",
        created_at: Date.now().toString(),
        players: players,
        game_settings: options,
        goalpost: 400,
        current_score: 260
    },
    {
        id: 3,
        name: "Game 3",
        created_at: Date.now().toString(),
        players: players,
        game_settings: options,
        goalpost: 400,
        current_score: 100
    }
];

const AllGames: React.FunctionComponent<IAllGamesProps> = () => {
    return (
        <>
            <Navbar />
            <h1>My Games</h1>
            <AllGamesLayout games={games} />
        </>
    )
}

export default AllGames;