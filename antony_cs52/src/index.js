// change require to es6 import style
import $ from 'jquery';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

console.log('starting up');

let num = 0;
function setCounter() {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}
setInterval(setCounter, 1000);
