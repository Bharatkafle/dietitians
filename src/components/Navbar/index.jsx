import React, { useState, useEffect, useRef } from 'react';
import Logo from "../../Assets/logo.png";
import menuItems from "../../data";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import Layout from "../layout";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Popup from "./popup/index";
import SmallScreenNavbar from "./smallscreensavbar";
import { AiOutlineExport } from 'react-icons/ai';

import "./style.css";

const Navbar = () => {
  // State variable to manage Popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSidebarVisible, setSideBarVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    setSideBarVisible(false)
  };

  const toggleSidebar = () => {
    setSideBarVisible(false)
  }
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const showSidebar = () => {
    setSideBarVisible(!isSidebarVisible);
    setPopupVisible(false)
  };

  

  return (
    <div className="Navbar">
      <div>
      {isPopupVisible && <Popup show={togglePopup} onHide={handleClosePopup} />}
      </div>

      <Layout>
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-md-2">
            <div className="Navbar-section__logo ">
              <Link to="/">
                <img src={Logo} alt="logo" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-8">
            <div className="Navbar-menu">
              <ul className="d-flex align-items-center justify-content-between">
                {menuItems.map((menuItem, index) => (
                  <li key={index} className="nav-item">
                    {/* Use NavLink instead of Link */}
                    <NavLink
                      to={`/${menuItem.link}`}
                      className="nav-link"
                      activeClassName="active" // Define the active class name
                    >
                      {menuItem.name}
                    </NavLink>
                  </li>
                ))}
                <li className="Navbar-menu__searchicons">
                  {/* Add onClick event to toggle Popup visibility */}
                  <AiOutlineSearch onClick={togglePopup} />
                </li>
                <div className="burger-menu">
                  <RxHamburgerMenu onClick={showSidebar} />
                </div>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="Navbar-menu--rightsection">
              <Link to="memberportal">Member portal <AiOutlineExport className='export-icons'  /> </Link>

              <Link to="joinus">Join us <AiOutlineExport className='export-icons' /></Link>
            </div>
          </div>
        </div>
      </Layout>
      <div className="Navbar-small-screen">
        {isSidebarVisible && <SmallScreenNavbar onHide={handleClosePopup} toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  );
};

export default Navbar;
