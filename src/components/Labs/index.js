import React from "react";
import { Link } from "react-router-dom";
import TuitList from "../Tuiter/TuitList/TuitList";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput/index.js";
import ReduxExamples from "./redux-examples";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

import { combineReducers, createStore } from "redux";
import tuitsReducer from "../Tuiter/reducers/tuits-reducer";
import { Provider } from "react-redux";
const reducers = combineReducers({
  tuitsReducer
});
const store = createStore(reducers);

const Labs = () => {
  return (
      <Provider store={store}>
        <h1>Labs</h1>
        {/* <TodoItem/> */}
        <TuitList />
        {/* <TodoList/> */}
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <ReduxExamples/>
        <Link to="/homescreen">Homescreen</Link> |<Link to="/tuiter">Tuiter</Link>
      </Provider>
  );
};

export default Labs;
