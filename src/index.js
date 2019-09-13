import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import todoApp from './reducers';
import * as serviceWorker from './serviceWorker';

let store = createStore(todoApp)

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
