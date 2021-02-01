import React, { Component } from "react";
import { connect } from "react-redux";
import genericHttpClient from "../../api/genericHttpClient";
import { State } from "../../interfaces";

type Sprite = {
  front_default: string,
  back_default: string
};

type Move = {
  name: string
};

type Obj = {
  move: Move
};

type Pokemon = {
    name: string,
    height: number,
    weight: number,
    moves: Obj[],
    sprites: Sprite
};

type IState = {
    pokemonInfo: Pokemon
};

type Props = {
  currentPokemon: string
};

class PokemonInfo extends Component<Props, IState> {
    state: IState = {
        pokemonInfo: {} as Pokemon
    };

    public componentDidMount(): void {
        this.fetchPokemon();
    }

    private async fetchPokemon(): Promise<any> {
        const data: any = await genericHttpClient("https://pokeapi.co/api/v2/pokemon/" + this.props.currentPokemon);
        this.setState({ pokemonInfo: data });
    }

    public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.currentPokemon !== prevProps.currentPokemon) {
            this.fetchPokemon();
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <br />
                <strong>BIO</strong>
                <br />
                <label>Name: </label>
                <label>{this.state.pokemonInfo.name || ""}</label>
                <br />
                <label>Height: </label>
                <label>{`${this.state.pokemonInfo.height || ""} inches`}</label>
                <br />
                <label>Weight: </label>
                <label>{`${this.state.pokemonInfo.weight || ""} pounds`}</label>
                <br />
                <label>Top 3 powers:</label>
                <ol>
                    {
                        this.state.pokemonInfo.moves &&
                        this.state.pokemonInfo.moves.slice(0, 3).map((pokemon, idx) => (<li key={idx}>{pokemon.move.name}</li>))
                    }
                </ol>
                <img src={this.state.pokemonInfo.sprites && this.state.pokemonInfo.sprites.front_default} alt={"front view not found"} />
                <img src={this.state.pokemonInfo.sprites && this.state.pokemonInfo.sprites.back_default} alt={"back view not found"} />
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
  return {
    currentPokemon: state.home.currentPokemon
  };
};


export default connect(mapStateToProps)(PokemonInfo);