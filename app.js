// const heading = React.createElement('h1',{id:'heading'},'Hello World from React');
// console.log(heading); //its an object 
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// console.log(root); //getting root id root
// root.render(heading); //here it will convert heading object to h1 tag by using render

const parentTag = React.createElement('div',
    {id:'parent'},
    React.createElement('div',
        {id:'child'},
        [React.createElement('h1',{id:'heading'},'Hello World H1'),React.createElement('h2',{id:'heading'},'Hello World H2')]));
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(parentTag);