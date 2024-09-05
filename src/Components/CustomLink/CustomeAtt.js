import React from 'react';
// import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  // const navigate = useNavigate();

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;