import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './style.css';
import Layout from '../../layout';
import SectionInput from './inputSection';

const Popup = ({ onHide }) => {
  return (
    <Layout>
      <div className='popup'></div>
      <div className='popup-items'>
        <div className='popup-items_details'>
          <div onClick={onHide} className='popup-items_details--closeicons'>
            <AiOutlineClose />
          </div>
         <SectionInput/>
          
        </div>
      </div>
    </Layout>
  );
};

export default Popup;
