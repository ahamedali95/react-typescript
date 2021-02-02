import React, {ChangeEvent, useEffect} from "react";
import { connect } from "react-redux";
import { setCurrentPokemon } from "../../reducers/homeReducer";
import { State, Pokemon } from "../../interfaces";
import {fetchPokemons} from "../../actions/home";

type Props = {
    currentPokemon: string,
    isDangerous: boolean,
    pokemons: Pokemon[]
    setCurrentPokemon: (val: string) => void,
    fetchPokemons: () => void
};

const PokemonList = (props: Props) => {
    useEffect(() => {
        props.fetchPokemons();
    }, []);

    const renderPokemonOptions = (): Array<JSX.Element> => {
        return props.pokemons.map((option: Pokemon, key: number) => {
            return (<option key={key} value={parseValue(option.url)}>{option.name}</option>);
        });
    };

    const parseValue = (url: string): number => {
        const values = url.split("/");

        return Number(values[values.length - 2]);
    };

    const handleSelection = (e: ChangeEvent): void => {
        const target = e.target as HTMLSelectElement;
        props.setCurrentPokemon(target.value);
    };


    return (
        <>
            <select
                onChange={(e: ChangeEvent): void => handleSelection(e)}
                value={props.currentPokemon}
                style={{ backgroundColor: props.isDangerous ? "red": "white" }}
            >
                {renderPokemonOptions()}
            </select>
        </>
    );
};

const mapStateToProps = (state: State) => {
    return {
        currentPokemon: state.home.currentPokemon,
        pokemons: state.home.pokemons,
        isDangerous: state.home.isDangerous
    }
};

export default connect(mapStateToProps, { fetchPokemons, setCurrentPokemon })(PokemonList);