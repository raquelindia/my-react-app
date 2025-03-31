import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>;

/* React Array Methods */

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>);

const container = document.getElementById('root');
// changed this:
// const root = ReactDOM.createRoot(document.getElementById('root'));

// to this:
const root = ReactDOM.createRoot(container);

root.render(myFirstElement);
root.render(myList);