import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={`${process.env.PUBLIC_URL}${props.src}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>
          <div className='cards_info'>
            <div className='cards_desc'>
              <div className='cards__item__heading'>
                <h5 className='cards__item__htext'>{props.label}</h5>
                <div className='cards__item__separator'/>
              </div>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
            </div>
            <div className='button'>
              <h5 className='text'> Learn More </h5>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;