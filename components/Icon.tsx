
import React from 'react';

interface IconProps {
  type: 'microphone' | 'stop' | 'thinking';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'microphone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"></path>
        </svg>
      );
    case 'stop':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h12v12H6z"></path>
        </svg>
      );
    case 'thinking':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
                <circle cx="5" cy="12" r="2" />
            </svg>
        )
  }
};
