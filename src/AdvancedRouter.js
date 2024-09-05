// AdvancedRouter.js

import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

const isExternalLink = (to) => {
  return to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');
};

export const CustomLink = ({ to, children, ...props }) => {
  if (isExternalLink(to)) {
    return <a href={to} {...props}>{children}</a>;
  }
  return <Link to={to} {...props}>{children}</Link>;
};

export const CustomNavLink = ({ to, children, ...props }) => {
  if (isExternalLink(to)) {
    return <a href={to} {...props}>{children}</a>;
  }
  return <NavLink to={to} {...props}>{children}</NavLink>;
};

export const AdvancedRouter = ({ routes, useHashRouter = false }) => {
  const RouterComponent = useHashRouter ? HashRouter : BrowserRouter;

  return (
    <RouterComponent>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              React.cloneElement(route.element, {
                CustomLink,
                CustomNavLink
              })
            }
          />
        ))}
      </Routes>
    </RouterComponent>
  );
};