import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import NicConfig from './nic_config';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NicConfig />, document.getElementById('nic_config'));
   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
