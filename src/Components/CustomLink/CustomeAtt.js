import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;