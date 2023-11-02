import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import { BsFacebook , BsInstagram, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
      <footer>
          <div className='footer_section  container' >
              <div className='social' >
              <div className='socail-header heading'>
                  <h3>Follow us on</h3>
                  </div>
                  <div className='socail-header_icons' >
                     <Link> <BsFacebook /></Link>
                      <Link><BsInstagram /></Link>
                      <Link><BsLinkedin/></Link>
                  </div>
          </div>
          </div>
          
          
     </footer>
  )
}

export default Footer