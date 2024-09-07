import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');

  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    if (!isExternal) {
      // console.log('CustomLink clicked, scrolling to top');
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    }
  };

  if (isExternal) {
    return <a href={to} {...props} onClick={handleClick}>{children}</a>;
  }

  const path = to.startsWith('/') ? to : `/${to}`;
  // console.log('CustomLink navigating to:', path);

  return (
    <Link 
      to={path} 
      {...props}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;