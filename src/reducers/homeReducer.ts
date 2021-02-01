import {createSlice, PayloadAction, ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {HomeState, Pokemon} from "../interfaces/index";
import home from "../state/home";
import ButtonTypes from "../constants/ButtonTypes";
import { fetchPokemons } from "../actions/home";

const homeReducer = createSlice({
   name: "home",
   initialState: home,
   reducers: {
      setPokemons(state: HomeState, action: PayloadAction<Pokemon[]>): void {
         state.isLoading = false;
         state.pokemons = action.payload;
      },
      setCurrentPokemon(state: HomeState, action: PayloadAction<string>): void {
         state.currentPokemon = action.payload;
      },
      setFearFactor(state: HomeState, action: PayloadAction<ButtonTypes>): void {
         state.isDangerous = action.payload === ButtonTypes.dangerous;
      },
      destroy(state: HomeState): void {
         state.isDestroyed = true;
      }
   },
   // extraReducers: (builder: ActionReducerMapBuilder<HomeState>) => {
   //    builder
   //        .addCase(pokemonFetchPending, (state: HomeState, action: PayloadAction<undefined>): void => {
   //           state.isLoading = true
   //        })
   //        .addDefaultCase((state: HomeState): HomeState => state)
   // }
   extraReducers: (builder: ActionReducerMapBuilder<HomeState>) => {
      builder
          .addCase(fetchPokemons.pending, (state: HomeState, action: PayloadAction<undefined>): void => {
             state.isLoading = true
          })
          .addDefaultCase((state: HomeState): HomeState => state)
   }
});

export const { setPokemons, setCurrentPokemon, setFearFactor, destroy } = homeReducer.actions;
export default homeReducer.reducer;




