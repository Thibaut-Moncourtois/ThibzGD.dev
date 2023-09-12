import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkMode() {
  return <FontAwesomeIcon icon={faMoon} className="cursor-pointer text-2xl" />;
}

export default DarkMode;
