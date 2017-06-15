import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import registerServiceWorker from './registerServiceWorker';
// import '/css/index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Main />
  </Router>, document.getElementById('root'));
registerServiceWorker();
