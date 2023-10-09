import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import { BsFacebook , BsInstagram, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
      <footer>
          <div className='footer_section  container' >
              <div className='row d-flex  justify-content-center align-item-center'>
                  <div className='col-md-2 col-sm-6 '>
                      <div className='footer_section-items' >
                          <Link><h2>Health advice</h2></Link>
                          <Link className='fotterlink' ><span>Recipe</span></Link>
                      </div>
                  </div>
                  <div className='col-md-2'>
                  <div className='footer_section-items' >
                          <Link><h2>Seeing a dietion</h2></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Find a dietitian</span></Link>
                          <Link ><span>Register of APDs</span></Link>
                          <Link ><span>Dietitians Day</span></Link>
                          <Link ><span>Dietitians Week</span></Link>
                         
                          
                         
                      
                

                      </div>
                  </div>
                  <div className='col-md-2 col-sm-6 '>
                      <div className='footer_section-items'>
                      <Link><h2>Seeing a dietion</h2></Link>
                      <Link ><span>What to expect</span></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>

                          <Link ><span>elp with costs</span></Link>
                  </div>
                      </div>
                 
                      <div className='col-md-2 col-sm-6 '>
                      <div className='footer_section-items'>
                      <Link><h2>Work in diatetic</h2></Link>
                      <Link ><span>What to expect</span></Link>
                          <Link ><span>University courses</span></Link>
                          <Link ><span>Standards and scope</span></Link>
                          <Link ><span>National Competency</span></Link>
                          <Link ><span>Complaints and feedback</span></Link>
                          <Link ><span>Membership</span></Link>
                          <Link ><span>Credentialing of dietitians</span></Link>
                          <Link ><span>Professional development</span></Link>
                          <Link ><span>courses and events</span></Link>

                          <Link ><span>Journals and research</span></Link>
                          <Link ><span>Skills recognition in Australia</span></Link>
                          <Link ><span>Find a locum</span></Link>
                          
                  </div>
                      </div>
                 
                  <div className='col-md-2 col-sm-6 '>
                      <div className='footer_section-items' >
                      <Link><h2>Adovocacy and policy</h2></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>National Competency</span></Link>
                          <Link ><span>Complaints and feedback</span></Link>
                          <Link ><span>Membership</span></Link>
                          <Link ><span>Credentialing of dietitians</span></Link>
                          <Link ><span>Professional development</span></Link>
                          <Link ><span>courses and events</span></Link>

                          <Link ><span>Journals and research</span></Link>
                          <Link ><span>Skills recognition in Australia</span></Link>
                          <Link ><span>Find a locum</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          
                         
                      </div>
                  
                  </div>
                  <div className='col-md-2 col-sm-6 '>
                      <div className='footer_section-items'>
                      <Link><h2>About us</h2></Link>
                      <Link ><span>What to expect</span></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>

                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>What to expect</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                          <Link ><span>National Competency</span></Link>
                          <Link ><span>Complaints and feedback</span></Link>
                          <Link ><span>Membership</span></Link>
                          <Link ><span>Credentialing of dietitians</span></Link>
                          <Link ><span>Professional development</span></Link>
                          <Link ><span>courses and events</span></Link>

                          <Link ><span>Journals and research</span></Link>
                          <Link ><span>Skills recognition in Australia</span></Link>
                          <Link ><span>Find a locum</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>Help with costs</span></Link>
                          <Link ><span>elp with costs</span></Link>
                                                   <Link ><span>elp with costs</span></Link>
                          
                          
</div>
                  </div>
              </div>
              <div className='social' >
              <div className='socail-header heading'>
                  <h3>Social</h3>
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