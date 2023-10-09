import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './style.css';
import menuItems from '../../../data/index';
import Logo from "../../../Assets/logo.png"
import { AiOutlineExport } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';




const SmallScreenNavbar = ({toggleSidebar}) => {
  return (
      <div className='small__screenDevice'>
            <div className='small__screenDevice--navbar'>
        <div className="Navbar-section__logo small__screenDevice--navbarlogo  ">
          <AiOutlineClose className='closeIcons' onClick={toggleSidebar}/>
              <Link to="/"> 
                <img src={Logo} alt="logo" className="img-fluid" />
              </Link>
            </div>
         <div className='small__screenDevice--navbar-menu'>
           {menuItems.map((menuItem, index) => (
             <Link key={index} to={`/${menuItem.link}`} className='nav-link'>
               {menuItem.name}
             </Link>
           ))}
           <div className="last-section" >
                <Link to="memberportal">Member portal <AiOutlineExport className='export-icons' /></Link>           
               <Link to="joinus">Join us <AiOutlineExport className='export-icons'   /> </Link>
           </div>
         </div>
       </div>
    </div>
  );
};

export default SmallScreenNavbar;
