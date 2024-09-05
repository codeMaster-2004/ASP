import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');
  
  if (isExternal) {
    return <a href={to} {...props}>{children}</a>;
  }
  
  // For internal links, keep the leading slash
  return <Link to={to.startsWith('/') ? to : `/${to}`} {...props}>{children}</Link>;
};

export default CustomLink;