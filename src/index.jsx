import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app.jsx'


const defaultSate = {
   transactions: [],
   courses: {}
}

const reducer = (state = defaultSate, action) => {
  switch (action.type) {
    case "ADD_TRANS":
      const resultTransaction = {...state, transactions: [...state.transactions, action.transaction]}
      return resultTransaction;
    case "SET_COURS": 
      const resultCours =  {...state, courses: action.courses};
      return resultCours;
    default: 
      return state;
  }
}

const store = createStore(reducer, defaultSate);




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <ToastContainer/>
        <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
