import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import SubComponent from './components/Body';
import AboutComponent from './components/About.js';
import ContactComponent from './components/Contact';
import ErrorComponent from './components/Error';
import RestMenuComponent from './components/RestMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

const Grocery = lazy(()=>import("./components/Grocery.js"))

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
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
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