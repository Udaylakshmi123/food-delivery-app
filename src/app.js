import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import SubComponent from './components/Body';
import AboutComponent from './components/about';
import ContactComponent from './components/contact';
import ErrorComponent from './components/error';
import RestMenuComponent from './components/restMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

// main Component
const MainComponent = () =>{
    return(<div className='app'>
       <HeaderComponent />
       <Outlet />
    </div>)
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainComponent />,
    children:[
      {
        path:'/',
        element: <SubComponent />
      },
      {
        path:'/about',
        element: <AboutComponent />
      },
      {
        path:'/contact',
        element: <ContactComponent />
      },
      {
        path:'/restaurants/:resId',
        element: <RestMenuComponent />
      }
    ],
    errorElement: <ErrorComponent />
  }  
])
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);