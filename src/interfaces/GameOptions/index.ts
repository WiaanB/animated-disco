export default interface GameOptions {
    id: number;
    streak_multiplier: number;
    value_identifier: string;
    pry_threshold: number;
    increments: number;
    // options
    allow_pries?: boolean
    lucky_draw?: boolean
    sign_on_bonus?: boolean
    allow_don?: boolean // don -> double or nothing
    don_limit?: number;
}