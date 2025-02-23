import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import SubComponent from './components/Body';
import ContactComponent from './components/Contact';
import ErrorComponent from './components/Error';
import RestMenuComponent from './components/RestMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/userContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import CartList from './components/CartList.js';
const Grocery = lazy(()=>import("./components/Grocery.js"));

const About = lazy(()=>import("./components/About.js"));

const MainComponent = () =>{

  const [userName, setUserName] = useState();
  
  useEffect(()=>{
    const data = {
      name:'Jaya Sai'
    }
    setUserName(data.name);
  },[])
    return(
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className='app'>    
        <UserContext.Provider value={{loggedInUser:'Jaya'}}>
       <HeaderComponent />
          </UserContext.Provider>  
       <Outlet />
       </div>
      </UserContext.Provider>
      </Provider>      
    )
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
        element:  <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
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
        path:'/cart',
        element:<CartList />
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
root.render(<RouterProvider router={appRouter} future={{v7_startTransition: true}}/>);