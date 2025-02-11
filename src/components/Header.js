import {CART_URL} from '../utils/constants';
import LOGO_URL from '../utils/constants';
import { useState } from 'react';
// header component
const HeaderComponent = () =>{
  const [btnName, setBtnName] = useState('LogIn');
    return (
    <div className="header">
     <div className='logo'>
       <img src={LOGO_URL} />
     </div>
     <div className='nav-items'>
       <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contct Us</li>
           <li><img src={CART_URL} /></li>
           <li><button style={{cursor:'pointer'}} onClick={()=>{
            setBtnName(btnName ==='LogIn' ? 'LogOut' : 'LogIn') 
            // btnName = btnName ==='LogIn' ? 'LogOut' : 'LogIn';
            // setBtnName(btnName);
           }}>{btnName}</button></li>
       </ul>
     </div>
    </div>
    )
   }

export default HeaderComponent;   