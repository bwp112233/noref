import React from 'react';
import ReactDOM from 'react-dom';
import copyListener from './src/js/copyListener';
import NoRefApp from './App';
require("babel-core/register");
require("babel-polyfill");


copyListener();

ReactDOM.render(<NoRefApp />, document.getElementById('noRefRoot'));