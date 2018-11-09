import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/classSwitch';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './photos/img (1).jpg';
//import './components/jquery-1.8.3.min.js';
import './components/functions.js';
//import People from './components/people';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
