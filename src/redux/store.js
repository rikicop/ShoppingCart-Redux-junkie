import { createStore } from "redux";
import { combineReducers } from "redux";
import { shopReducer } from "./Shopping/shopping-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  shop: shopReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
