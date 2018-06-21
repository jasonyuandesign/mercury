import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Motion, spring} from 'react-motion';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
