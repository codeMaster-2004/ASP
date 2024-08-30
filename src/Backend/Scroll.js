  import React, { useEffect } from 'react';
  import { useLocation } from 'react-router-dom';

  export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
       // Scroll to top when the pathname changes
       window.scrollTo(0, 0);
    }, [pathname]);

     return null; // This component doesn't need to render anything
   }

  //  export default ScrollToTop;




// import React, { useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// // Custom hook to handle scroll behavior
// export function useScrollToTop() {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     };

//     scrollToTop();
//     // Add event listener for popstate (browser back/forward buttons)
//     window.addEventListener('popstate', scrollToTop);

//     // Cleanup
//     return () => window.removeEventListener('popstate', scrollToTop);
//   }, [pathname]);
// }

// // ScrollToTop component that uses the hook
// export function ScrollToTop() {
//   useScrollToTop();
//   return null;
// }

// // Enhanced ScrollToTopLink component
// export function ScrollToTopLink({ to, children, ...props }) {
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault();
    
//     // Scroll to top immediately
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });

//     // Use setTimeout to allow the scroll to start before navigation
//     setTimeout(() => {
//       navigate(to);
//     }, 100);
//   };

//   return (
//     <Link to={to} onClick={handleClick} {...props}>
//       {children}
//     </Link>
//   );
// }

// // Enhanced ScrollToTopAnchor component
// export function ScrollToTopAnchor({ href, children, ...props }) {
//   const handleClick = (e) => {
//     const isExternal = href.startsWith('http') || href.startsWith('www');
//     if (!isExternal) {
//       e.preventDefault();
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//       setTimeout(() => {
//         window.history.pushState({}, '', href);
//       }, 100);
//     }
//   };

//   return (
//     <a href={href} onClick={handleClick} {...props}>
//       {children}
//     </a>
//   );
// }