import Player from '../Player';
import GameOptions from '../GameOptions';

export default interface Game {
    id: number;
    name: string;
    created_at: string;
    players: Player[];
    game_settings: GameOptions;
    goalpost: number;
    current_score: number;
}