
import React from 'react';

const ClothingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.364V21m-3-3l-1 1m6-1l1 1" />
  </svg>
);

export default ClothingIcon;
