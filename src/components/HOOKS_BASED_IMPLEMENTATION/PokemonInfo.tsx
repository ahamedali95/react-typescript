import React, {Component, useEffect, useState} from "react";
import { connect } from "react-redux";
import genericHttpClient from "../../api/genericHttpClient";
import { State } from "../../interfaces";
import {fetchPokemons} from "../../actions/home";

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

type Props = {
  currentPokemon: string
};

const PokemonInfo = (props: Props): JSX.Element => {
    const [pokemonInfo, setPokemonInfo] = useState<Pokemon>({} as Pokemon);
    
    useEffect((): void => {
        fetchPokemon();
    }, [props.currentPokemon]);
    
    const fetchPokemon = async (): Promise<any> => {
        const data: any = await genericHttpClient("https://pokeapi.co/api/v2/pokemon/" + props.currentPokemon);
        setPokemonInfo(data);
    };
    
    return (
        <div>
            <br />
            <strong>BIO</strong>
            <br />
            <label>Name: </label>
            <label>{pokemonInfo.name || ""}</label>
            <br />
            <label>Height: </label>
            <label>{`${pokemonInfo.height || ""} inches`}</label>
            <br />
            <label>Weight: </label>
            <label>{`${pokemonInfo.weight || ""} pounds`}</label>
            <br />
            <label>Top 3 powers:</label>
            <ol>
                {
                    pokemonInfo.moves &&
                    pokemonInfo.moves.slice(0, 3).map((pokemon, idx) => (<li key={idx}>{pokemon.move.name}</li>))
                }
            </ol>
            <img src={pokemonInfo.sprites && pokemonInfo.sprites.front_default} alt={"front view not found"} />
            <img src={pokemonInfo.sprites && pokemonInfo.sprites.back_default} alt={"back view not found"} />
        </div>
    );
    
};

const mapStateToProps = (state: State) => {
  return {
    currentPokemon: state.home.currentPokemon
  };
};


export default connect(mapStateToProps)(PokemonInfo);