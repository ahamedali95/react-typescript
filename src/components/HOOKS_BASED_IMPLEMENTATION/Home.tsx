import React from "react";
import { connect } from "react-redux";
import PokemonList from "./PokemonList";
import PokemonInfo from "./PokemonInfo";
import Buttons from "./Buttons";
import { State } from "../../interfaces";

type Props = {
    readonly title?: string, //READONLY AND OPTIONAL,
    isDestroyed: boolean
};

const Home = (props: Props) => {
    return (
        <>
            {
                !props.isDestroyed ?
                    <div data-test="home-component-main">
                        <h1>WELCOME HOME</h1>
                        <PokemonList />
                        <PokemonInfo />
                        <Buttons />
                    </div>
                    :
                    <h1 data-test="home-component-destroyed-message">DESTROYED</h1>
            }
        </>
    );

};

const mapStateToProps = (state: State) => {
    return {
        isDestroyed: state.home.isDestroyed
    };
};

export default connect(mapStateToProps)(Home);