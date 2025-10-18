
import React from 'react';

const AppliancesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10H4.222a2 2 0 00-1.99 1.667l-1 5A2 2 0 003.222 19h1.556a2 2 0 001.99-1.667l1-5A2 2 0 005.778 10H14m0 0v9m0-9H10m4 0h4m0 0v9m0-9h-2m2 0h2m-2-2v2m-4 7h4" />
  </svg>
);

export default AppliancesIcon;
