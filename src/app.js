import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import SubComponent from './components/Body';

// main Component
const MainComponent = () =>(
    <div className='app'>
       <HeaderComponent />
       <SubComponent />
    </div>
)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<MainComponent />);