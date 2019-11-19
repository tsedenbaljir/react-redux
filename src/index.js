import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'

function productsReducer(state = [], action){
  return state;
}

function userReducer(state = '', action){
  return state;
}
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

// const store = createStore(allReducers);

// const store = createStore(
//   allReducers,
//   {
//     products:[{name: 'iPhone',name2: 'iPhone2'},{name3: 'iPhone3',name4: 'iPhone4'}],
//     user: 'Michael'
//   });

const store = createStore(
  allReducers,
  {
    products:[{name: 'iPhone',name2: 'iPhone2'},{name3: 'iPhone3',name4: 'iPhone4'}],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
  );

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
