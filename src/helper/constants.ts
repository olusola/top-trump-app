export type CardType = {
    id: string;
    name: string;
    crew: number;
    passengers: number;
    hyperdriveRating: number;
    length: number;
}

export type State = {
    state: string;
}

export type GameHistory = {
    winners: CardType[];
    cards: CardType[];
    gametype: State;
}

export type LocationState = {
    currentPlays?: GameHistory[];
}

export type RootState = {
    history: GameHistory[];
}