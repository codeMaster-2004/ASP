import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;