import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import registerServiceWorker from './registerServiceWorker';
// import '/css/index.css';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
    <Main />
, document.getElementById('root'));
registerServiceWorker();
