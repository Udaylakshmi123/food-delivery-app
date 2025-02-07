import React from 'react';
import ReactDOM from 'react-dom/client';

const parentTag = React.createElement('div',
    {id:'parent'},
    React.createElement('div',
        {id:'child'},
        [React.createElement('h1',{id:'heading'},'Hello World H1 tag'),React.createElement('h2',{id:'heading'},'Hello World H2')]));
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(parentTag);