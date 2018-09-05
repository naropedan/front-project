import App from "./components/App.js";
import {Provider} from 'react-redux';
import store from "./store/index";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));