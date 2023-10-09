import React from 'react';
import './style.css';
import { BsArrow90DegUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
const CardSection = () => {
  return (
      <div className=" Cardsection_header__main ">
         
          <div className='container' >
          <div className="row">
          <div className='Cardsection_header heading'>
              <h1>Seeing  a dietitian </h1>
          </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
            <div className='card-body_header heading '> 
                              <h3 className="card-title">Help with costs</h3>
                           <Link>   <BsArrow90DegUp/></Link>
                              
            </div>
                          <div className='paragraph'>
                               <p className="card-text ">Lorem ipsum dolor sit amet. Quo dolorum quam utdistinctio ut quia unde. Ut voluptas minima aut aspernatur sint id consequatur possimus.</p>
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
             <div className='card-body_header heading'>
                              <h3 className="card-title">Seeing a Australia</h3>
                            <Link>  <BsArrow90DegUp/></Link>
            </div>
            <div className='paragraph'>
                               <p className="card-text ">Lorem ipsum dolor sit amet. Quo dolorum quam utdistinctio ut quia unde. Ut voluptas minima aut aspernatur sint id consequatur possimus.</p>
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
             <div className='card-body_header heading'>
                              <h3 className="card-title">Seeing a America</h3>
                              <Link><BsArrow90DegUp/></Link>
            </div>
            <div className='paragraph'>
                               <p className="card-text ">Lorem ipsum dolor sit amet. Quo dolorum quam utdistinctio ut quia unde. Ut voluptas minima aut aspernatur sint id consequatur possimus.</p>
             </div>
            </div>
          </div>
        </div>
              </div>
              
              <div className='cardsection__last' >
              <div className='row' >
                  <div className='col-md-12' >
                      <div className='d-flex justify-content-between align-items-center' >
                              <div className='cardsection__lastheading heading w-100'>
                                  <h3>Discover how  dietitian</h3>
                              </div>
                              <div  className='cardsection__lastheading w-100 ' >
                                  <Button name="Find  out more" />
                                  
                      </div>
                     </div>

                  </div>
              </div>
              </div>
        </div>
    </div>
  );
};

export default CardSection;
