import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TechnoTitle = ({ children }: Props) => {
  return <p className="text-gray-800 py-1 dark:text-gray-400">{children}</p>;
};

export default TechnoTitle;
