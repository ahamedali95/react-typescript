import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import logger from "redux-logger";
import {batchDispatchMiddleware} from "redux-batched-actions";
// import Home from "./components/CLASS_BASED_IMPLEMENTATION_WITHOUT_REDUX/Home";
import Home from "./components/CLASS_BASED_IMPLEMENTATION_WITH_REDUX/Home";
import reducers from "./reducers";

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        const middlewares = [...getDefaultMiddleware(), batchDispatchMiddleware];

        return process.env["NODE" + "_ENV"] !== "production" ? [...middlewares, logger] : middlewares;
    },
    devTools: process.env["NODE" + "_ENV"] !== "production",
});

ReactDOM.render(
    <Provider store={store}>
        <Home title="home" />
    </Provider>,
  document.getElementById("root")
);
