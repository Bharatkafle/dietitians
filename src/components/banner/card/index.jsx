import React from "react";
import "./style.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineExport } from 'react-icons/ai';
import Button from "../../button/Button";


const Card = () => {
  return (
      <div className="cards">
          <div className="cards__container container  " >
              <div className=" cards__container--box " >
                  
                  <div className="card_contain "   >
                  
              <div className="card_contain--heading heading" >
                  <h1>Diet and nutrition health advice</h1>
                  <FaArrowCircleUp/>
              </div> 
              <div className="card_contain-heading-desc paragraph" >
                  <p>Lorem ipsum dolor sit amet. Ab omnis perferendis et facere facere vel repellat galisum eos labore minima aut aperiam laboriosam qui rerum voluptate. In voluptatum corporis eum minus sequi qui eveniet quasi eum officia illo rem velit consectetur aut voluptas quidem est illum veritatis! Qui inventore ratione et quia illum ut nisi ipsam aut dolores</p>
              </div>
          </div>
          <div className="card_contain "   >
                 
              <div className=" heading card_contain--heading" >
                  <h1>Diet and nutrition health advice</h1>
                  <FaArrowCircleUp/>
              </div> 
              <div className="card_contain-heading-desc paragraph " >
                  <p>Lorem ipsum dolor sit amet. Ab omnis perferendis et facere facere vel repellat galisum eos labore minima aut aperiam laboriosam qui rerum voluptate. In voluptatum corporis eum minus sequi qui eveniet quasi eum officia illo rem velit consectetur aut voluptas quidem est illum veritatis! Qui inventore ratione et quia illum ut nisi ipsam aut dolores</p>
              </div>
          </div>
         </div>
          </div>
          

          <div className="card-last__section " >
              <div className="container" >
              <div className="card-last__section--container " >
                  <div  className=" heading card-last__section--container__contain-desc" >
                     <h1>Find a dietation</h1>
                  </div>
                      <div className="p-4" >
                      <Button name="Search" icon={<AiOutlineExport/> } /> 
                      </div>
               </div>
             </div>
          </div>
    </div>
  );
};

export default Card;
