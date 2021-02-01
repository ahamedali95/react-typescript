import React, {ChangeEvent, Component} from "react";
import genericHttpClient from "../../api/genericHttpClient";
import {Pokemon} from "../../interfaces";

type State = {
    pokemons: Array<Pokemon>
};

type Props = {
    currentPokemon: string,
    handleSelection: (a: string) => void,
    isDangerous: boolean
};

class PokemonList extends Component<Props, State> {
    state: State = {
        pokemons: []
    };

    public componentDidMount(): void {
        this.fetchPokemons();
    }

    private async fetchPokemons(): Promise<void> {
        const options: any = await genericHttpClient("https://pokeapi.co/api/v2/pokemon");
        console.log(options);
        options && this.setState({ pokemons: options.results });
    }

    private renderPokemonOptions(): Array<JSX.Element> {
        return this.state.pokemons.map((option: Pokemon, key: number) => {
            return (<option key={key} value={PokemonList.parseValue(option.url)}>{option.name}</option>);
        });
    };

    private static parseValue(url: string): number {
        const values = url.split("/");

        return Number(values[values.length - 2]);
    }

    private handleSelection(e: ChangeEvent): void {
        const target = e.target as HTMLSelectElement;
        this.props.handleSelection(target.value);
    }

    public render(): JSX.Element {
        return (
            <select
                onChange={(e: ChangeEvent): void => this.handleSelection(e)}
                value={this.props.currentPokemon}
                style={{ backgroundColor: this.props.isDangerous ? "red": "white" }}
            >
                {this.renderPokemonOptions()}
            </select>
        );
    }
};

export default PokemonList;