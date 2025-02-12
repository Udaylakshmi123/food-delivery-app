import {CART_URL} from '../utils/constants';
import LOGO_URL from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router';
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
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contct Us</Link></li>
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