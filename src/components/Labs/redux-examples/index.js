import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Hello from "./reducers/Hello";
import TodosReducer from "./reducers/todos-reducer";
import Todos from "./todos-component";
const reducers = combineReducers({
  Hello,
  TodosReducer,
});
const store = createStore(reducers);

const ReduxExamples = () => {
  return (
      <Provider store={store}>
    <div>
      <h2>Redux Examples</h2>
      <HelloReduxExampleComponent/>
      <Todos/>
    </div>
    </Provider>
  );
};
export default ReduxExamples;
