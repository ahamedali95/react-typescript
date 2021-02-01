export interface Pokemon {
    name: string,
    url: string
}

export interface HomeState {
    isLoading: boolean,
    pokemons: Pokemon[],
    currentPokemon: string,
    isDangerous: boolean,
    isDestroyed: boolean
}

export interface State {
    home: HomeState
}