import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', "btn--aerosol", "btn--battery"];

const SIZES = ['btn--medium', 'btn--large'];

// Define the different button types and corresponding routes
const TYPES = {
  contact: '/contact-us',
  dustMitigation: '/dust-mitigation',
  fields: '/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field',
  concentration: '/aerosol-concentration',
  batterythermal: '/battery-thermal-management',
  batterythermaldetection: '/battery-thermal-detection'
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonType
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonType = TYPES[buttonType] ? TYPES[buttonType] : TYPES.contact;

  return (
    <Link to={checkButtonType} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};