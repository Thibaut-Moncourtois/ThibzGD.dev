import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../../hooks/useTheme';

function DarkMode() {
  const { theme, setTheme } = useTheme();

  return theme === 'light' ? (
    <FontAwesomeIcon
      icon={faMoon}
      className="cursor-pointer text-2xl"
      onClick={() => setTheme('dark')}
    />
  ) : (
    <FontAwesomeIcon
      icon={faSun}
      className="cursor-pointer text-2xl"
      onClick={() => setTheme('light')}
    />
  );
}

export default DarkMode;
