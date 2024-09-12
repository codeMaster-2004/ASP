import React from 'react';
import styles from './Button.module.css';
import CustomLink from '../CustomLink/CustomeAtt';

const STYLES = ['btnPrimary', 'btnOutline', 'btnTest', "btnAerosol", "btnBattery", "btnSubmit", "btnLearn"];

const SIZES = ['btnMedium', 'btnLarge', 'btnExtralarge'];

// Define the different button types and corresponding routes
const TYPES = {
  aerosol:'/aerocapture',
  contact: '/contact-us',
  client: '/clients',
  dustMitigation: '/dust-mitigation',
  concentration: '/aerosol-concentration',
  batterythermal: '/battery-thermal-management',
  batterythermaldetection: '/battery-thermal-runaway-detection-prevention',
  batterysafety: '/batterysafety',
  Morphology: '/morphology-characterization-optical-extinction-spectroscopy',
  Polarized: '/polarized-light-scattering',
  SPS: '/sedimentation-based-particle-sizing',
  Optical: '/optical-instrumentation',
  electro: '/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field',
  facility: "/facilities"
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

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <CustomLink to={checkButtonType}>
      <button
        className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
        type={type}
        onClick={handleClick}
      >
        {children}
      </button>
    </CustomLink>
  );
};