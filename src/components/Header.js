import {CART_URL} from '../utils/constants';
import LOGO_URL from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
// header component
const HeaderComponent = () =>{
  const [btnName, setBtnName] = useState('LogIn');
  const onlineStatus = useOnlineStatus();
    return (
    <div className="flex justify-between bg-green-50 items-center">
     <div className='logo'>
     <img className="w-24" src={LOGO_URL} />
     </div>
     <div className='flex items-center p-4'>
       <ul className='flex items-center p-4'>
        <li className='px-2'>Online Status: {onlineStatus ? "✅": "🔴"}</li>
           <li className='px-2 fs-12'><Link to='/'>Home</Link></li>
           <li className='px-2'><Link to='/about'>About</Link></li>
           <li className='px-2'><Link to='/contact'>Contct Us</Link></li>
           <li className='px-2'><Link to='/grocery'>Grocery</Link></li>
           <li className='px-2'><img src={CART_URL} className="w-12"/></li>
           <li className='px-2'><button className='button' style={{cursor:'pointer'}} onClick={()=>{
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