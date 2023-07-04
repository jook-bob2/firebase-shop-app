import React from 'react';
import ICONS from '@src/constants/ICONS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// size = ["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]
export default function Icon({ name, isActive = false, size, color }) {
  const icon = ICONS[name];

  if (name && icon) {
    const { defaultSrc, activeSrc } = icon;
    return (
      <>
        {name && (
          <FontAwesomeIcon
            icon={isActive ? activeSrc : defaultSrc}
            size={size}
            color={color}
          />
        )}
      </>
    );
  }

  return null;
}
