import React, {Component} from "react";
import PokemonList from "./PokemonList";
import PokemonInfo from "./PokemonInfo";
import ButtonTypes from "../../constants/ButtonTypes.js";
import Buttons from "./Buttons";

type Props = {
  readonly title?: string //READONLY AND OPTIONAL
};

type State = {
  currentPokemon: string,
  isDangerous: boolean,
  isDestroyed: boolean
};

class Home extends Component<Props, State> {
  state: State = {
    currentPokemon: "1",
    isDangerous: false,
    isDestroyed: false
  };

  // public constructor(props: Props) {
  //   super(props);
  //
  //   this.state = {
  //     pokemon: "",
  //     pokemons: []
  //   }
  // }


  private handleSelection(id: string): void {
    this.setState({ currentPokemon: id });
  }

  private handleFearToggle(value: ButtonTypes): void {
    this.setState({ isDangerous: value === ButtonTypes.dangerous });
  }

  private handleDestroy(): void {
    this.setState({ isDestroyed: true });
  }

  public render(): JSX.Element {
    return (
      <>
        {
          !this.state.isDestroyed ?
              <>
                <h1>WELCOME HOME</h1>
                <PokemonList
                    currentPokemon={this.state.currentPokemon}
                    handleSelection={(id: string): void => this.handleSelection(id)}
                    isDangerous={this.state.isDangerous}
                />
                <PokemonInfo currentPokemon={this.state.currentPokemon} />
                <Buttons
                    handleFearToggle={(value: ButtonTypes) => this.handleFearToggle(value)}
                    handleDestroy={() => this.handleDestroy()}
                />
              </>
              :
              <h1>DESTROYED</h1>
        }
      </>
    );
  }
}

export default Home;







//Example purpose only - IGNORE!
//************************
//INTERFACES - define types for object properties

// interface Employee {
//   name: string,
//   age: number
// }

const func = (employee: Employee) => {
  console.log(employee);
};

func({ name: "ahamed" });
//************************

//************************
//optional properties

// interface Employee {
//   name: string,
//   age?: number
// }
//************************

//************************
/*readonly properties*/

interface Employee {
  readonly name: string,
  readonly age?: number
}

const employee: Employee = { name: "ahamed", age: 100 };
//employee.name = "abbas";  //=> throws error

//readonly array
const arr: ReadonlyArray<Number> = [1,2,3,5];
//arr.push(4); //=> throws error
//************************


//FUNCTIONS

const func1 = (employee: Employee) : Number => {
  return 1;
};

console.log(func1(employee));


let str: string = "ahamed";
console.log(str);
