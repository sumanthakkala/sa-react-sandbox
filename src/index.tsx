import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {setTmdbInterceptor} from 'utils/axios/interceptor'

setTmdbInterceptor();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
