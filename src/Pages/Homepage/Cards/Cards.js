import React from 'react';
import './Cards.css'; 
import CustomLink from '../../../Components/CustomLink/CustomeAtt';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <div className='cards__container_left'>
            <img src={`${process.env.PUBLIC_URL}/images/image-27.png`} alt='products main' width='100%' height="400vh"/>
            <div className='cards__container_left_info'>
              <div className='cards__container_left_info_conatainer'>
                <div className='cards__container_left_info_heading'>
                  <h1>Our Facilities</h1>
                  <div className='cards_separator1'/>
                </div>
                <p>
                  Our laboratory is equipped with unique in-house constructed and third-party hardware and instrumentation to characterize the hazards and validate the effectiveness of safety technologies.
                </p>
              </div>
              <CustomLink to='/facilities' className='cards_button'>
                Learn more
              </CustomLink>
            </div>
          </div>
          <div className='cards__container_right'>
            <img src={`${process.env.PUBLIC_URL}/images/HomeCards.png`} alt='products main' width='100%' height="400vh"/>
            <div className='cards__container_right_info'>
              <div className='cards__container_right_info_conatainer'>
                <div className='cards__container_right_info_heading'>
                  <h1>Our Products and Services</h1>
                  <div className='cards_separator'/>
                </div>
                <p>
                  We provide engineering and computational analysis, specialized testing and custom instrumentation to help improve the performance and safety of your products and processes. 
                </p>
              </div>
              <CustomLink to='/products-services' className='cards_button'>
                Learn more
              </CustomLink>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cards;