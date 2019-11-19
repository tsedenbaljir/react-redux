import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

function reducer(state, action){
  console.log(action)

  return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'New state'
  }
};
store.dispatch(action);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
