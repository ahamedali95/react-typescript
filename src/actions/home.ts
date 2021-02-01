import {
    AsyncThunk,
    createAction,
    createAsyncThunk,
    AsyncThunkPayloadCreator,
    AsyncThunkPayloadCreatorReturnValue
} from "@reduxjs/toolkit";
import {State} from "../interfaces/index";
import {Action} from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setPokemons } from "../reducers/homeReducer";
import genericHttpClient from "../api/genericHttpClient";
import Endpoints from "../constants/Endpoints";

export const pokemonFetchPending = createAction("POKEMON_FETCH_PENDING");

//traditional way to implement async data flow with vanilla redux-thunk

// export const fetchPokemons = (): Function => {
//     return async (dispatch: ThunkDispatch<State, void, Action>, getState: () => State): Promise<any> => {
//         dispatch(pokemonFetchPending());
//
//         try {
//             //delay async call for 5 seconds to actually see the loader
//             setTimeout(async () => {
//                 const data: any = await genericHttpClient(Endpoints.allPokemons);
//                 data && dispatch(setPokemons(data.results));
//             }, 5000)
//         } catch (e) {
//             //show alert or do something on failure
//         }
//     };
// };

//recommended way to implement async data flow with redux-toolkit

export const fetchPokemons = createAsyncThunk(
    'fetchPokemons',
    async (val: undefined, thunkApi) => {
      thunkApi.dispatch(pokemonFetchPending());

      try {
            //delay async call for 5 seconds to actually see the loader
        setTimeout(async () => {
            const data: any = await genericHttpClient(Endpoints.allPokemons);
            data && thunkApi.dispatch(setPokemons(data.results));
        }, 5000)
      } catch (e) {
            //show alert or do something on failure
      }

    }
);