import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// React-Redux
import { Provider } from 'react-redux';
import gStore from './Store';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={gStore}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
