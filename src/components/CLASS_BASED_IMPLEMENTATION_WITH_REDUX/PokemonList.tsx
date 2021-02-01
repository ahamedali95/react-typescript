// @ts-nocheck -> did this because facing some issues with the redux connected component
import React, {ChangeEvent, Component} from "react";
import { connect } from "react-redux";
import { setCurrentPokemon } from "../../reducers/homeReducer";
import { State, Pokemon } from "../../interfaces";
import {fetchPokemons} from "../../actions/home";
import withLoader from "../../utilities/withLoader";

type Props = {
    currentPokemon: string,
    isDangerous: boolean,
    pokemons: Pokemon[]
    setCurrentPokemon: (val: string) => void,
    fetchPokemons: () => void
};

class PokemonList extends Component<Props> {
    public componentDidMount(): void {
        this.props.fetchPokemons();
    }

    private renderPokemonOptions(): Array<JSX.Element> {
        return this.props.pokemons.map((option: Pokemon, key: number) => {
            return (<option key={key} value={PokemonList.parseValue(option.url)}>{option.name}</option>);
        });
    };

    private static parseValue(url: string): number {
        const values = url.split("/");

        return Number(values[values.length - 2]);
    }

    private handleSelection(e: ChangeEvent): void {
        const target = e.target as HTMLSelectElement;
        this.props.setCurrentPokemon(target.value);
    }

    public render(): JSX.Element {
        console.log(this.props);
        return (
            <>
                <select
                    onChange={(e: ChangeEvent): void => this.handleSelection(e)}
                    value={this.props.currentPokemon}
                    style={{ backgroundColor: this.props.isDangerous ? "red": "white" }}
                >
                    {this.renderPokemonOptions()}
                </select>
            </>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        currentPokemon: state.home.currentPokemon,
        pokemons: state.home.pokemons,
        isDangerous: state.home.isDangerous
    }
};

export default withLoader(connect(mapStateToProps, { fetchPokemons, setCurrentPokemon })(PokemonList));