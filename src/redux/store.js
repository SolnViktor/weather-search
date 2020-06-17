import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import thunk from "redux-thunk";





let reducers = combineReducers({
    weather: weatherReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;