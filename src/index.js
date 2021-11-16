import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store'
// import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/configureStore'
import Login from './containers/login';
import Register from './containers/register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
     <Router className="App bg-gray-500">
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path ="/home" component={App}></Route>
            <Route path ="/register" component={Register}></Route>

            <Route path ="/" component={Login}></Route>
          </Switch>
        </PersistGate>
      </Provider>
    </ Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
