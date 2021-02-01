import {HomeState, Pokemon} from "../interfaces/index";

const home = ((): HomeState => {
   return {
       isLoading: false,
       pokemons: [] as Pokemon[],
       currentPokemon: "1",
       isDangerous: false,
       isDestroyed: false
   };
})();

export default home;