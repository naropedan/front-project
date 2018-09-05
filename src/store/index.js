import {createStore} from "redux";
import appData from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(appData, composeWithDevTools());

export default store;