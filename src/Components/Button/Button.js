import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', "btn--aerosol", "btn--battery", "btn--submit"];

const SIZES = ['btn--medium', 'btn--large', 'btn--extralarge'];

// Define the different button types and corresponding routes
const TYPES = {
  aerosol:'/aerocapture',
  contact: '/contact-us',
  client: '/clients',
  dustMitigation: '/dust-mitigation',
  fields: '/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field',
  concentration: '/aerosol-concentration',
  batterythermal: '/battery-thermal-management',
  batterythermaldetection: '/battery-thermal-detection',
  batterysafety: '/battery-safety',
  Morphology: '/morphology-characterization-optical-extinction-spectroscopy',
  Polarized: '/polarized-light-scattering',
  SPS: '/sedimentation-based-particle-sizing',
  Optical: '/optical-instrumentation',
  electro: '/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field'
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