import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './containers/serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import * as dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();