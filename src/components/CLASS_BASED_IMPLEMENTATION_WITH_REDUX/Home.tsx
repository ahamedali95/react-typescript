// @ts-nocheck -> did this because facing some issues with the redux connected component
import React, {Component} from "react";
import { connect } from "react-redux";
import PokemonList from "./PokemonList";
import PokemonInfo from "./PokemonInfo";
import Buttons from "./Buttons";
import { State } from "../../interfaces";

type Props = {
  readonly title?: string, //READONLY AND OPTIONAL,
  isDestroyed: boolean
};

export class Home extends Component<Props> {
  public render(): JSX.Element {
    return (
      <>
        {
          !this.props.isDestroyed ?
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
  }
}

const mapStateToProps = (state: State) => {
  return {
    isDestroyed: state.home.isDestroyed
  };
};

export default connect(mapStateToProps)(Home);