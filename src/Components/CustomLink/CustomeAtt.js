import React from 'react';
import { Link } from 'react-router-dom';

const isExternalLink = (to) => {
  return to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');
};

const CustomLink = ({ to, children, ...props }) => {
  if (isExternalLink(to)) {
    return <a href={to} {...props}>{children}</a>;
  }
  // Remove leading slash for internal links
  const internalTo = to.startsWith('/') ? to.slice(1) : to;
  return <Link to={internalTo} {...props}>{children}</Link>;
};

export default CustomLink;