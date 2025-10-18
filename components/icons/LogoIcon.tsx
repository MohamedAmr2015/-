import React from 'react';
import type { Language } from '../../translations';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  lang: Language;
}

const LogoIcon: React.FC<LogoIconProps> = ({ lang, ...props }) => {
  if (lang === 'ar') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="120"
        height="40"
        {...props}
      >
        <text
          x="10"
          y="35"
          fontFamily="Cairo, sans-serif"
          fontSize="35"
          fontWeight="bold"
          fill="#0d9488"
        >
          أجـرهـا
        </text>
        <path
          d="M10 45 Q 60 40, 110 45"
          stroke="#f97316"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    );
  }

  return (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      {...props}
    >
      <text
        x="10"
        y="40"
        fontFamily="Cairo, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#0d9488"
        style={{ letterSpacing: '1px' }}
      >
        Aggarha
      </text>
      <path
        d="M10 48 Q 80 43, 160 48"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

export default LogoIcon;
