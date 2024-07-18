import React from 'react';
import './Cards.css';
import CardItem from './Carditem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image-27.png'
              text='Our laboratory is equipped with unique in-house constructed and third-party hardware and instrumentation to characterize the hazards and validate the effectiveness of safety technologies.'
              label='Our Facilities'
              path='/facilities'
            />
            <CardItem
              src='/images/HomeCards.png'
              text='We provide engineering and computational analysis, specialized testing and custom instrumentation to help improve the performance and safety of your products and processes.'
              label='Our Products and Services'
              path='/products-services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;