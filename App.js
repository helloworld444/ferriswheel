import React from 'react';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers';
import {Provider} from "react-redux";
import QueryForm from "./components/QueryForm";
import MoviesList from "./components/MoviesList";
import {View} from "react-native";

const store = createStore(
  reducer,
  undefined,
  compose(applyMiddleware(thunk))
);

const App = () => (
  <Provider store={store}>
    <View style={{paddingHorizontal: 20}}>
      <QueryForm/>
      <MoviesList/>
    </View>
  </Provider>
);

export default App;