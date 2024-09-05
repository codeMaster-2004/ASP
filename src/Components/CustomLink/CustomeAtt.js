import React from 'react';
// import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  // const navigate = useNavigate();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   navigate(to);
  //   window.scrollTo(0, 0);
  // };

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;