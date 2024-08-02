import './index.scss';
import { useRef } from 'react';

const Logo = () => {
    return (
        <div className='logo-container'>
            <svg
                className="outline-logo"
                width="580px"
                height="900px"
                viewBox="-12.8 -12.8 153.60 153.60"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                fill="none"
                stroke="#d4d723"
                strokeWidth="2.688"
            >
                {/* Add stroke-dasharray and stroke-dashoffset for animation */}
                <path className="draw-path" d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z" />
            </svg>
        
            <svg
                className="solid-logo"
                width="580px"
                height="900px"
                viewBox="-12.8 -12.8 153.60 153.60"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                fill="#000000"
            >
                <path d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z" />
            </svg>
        </div>
    );
}

export default Logo;
