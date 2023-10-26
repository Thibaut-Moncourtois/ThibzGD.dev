import React from 'react';
import TechnoTitle from './TechnoTitle';
import Icon3d from '../Icon3d/Icon3d';

type Props = {
  title: string;
  subTitle: string;
  intro: string;
  tools: string[];
  icon: any;
};

const Card = ({ title, subTitle, intro, tools, icon }: Props) => {
  return (
    <div className="text-center shadow-lg pb-10 rounded-xl my-10 dark:shadow-gray-800 flex-1">
      {icon}
      <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2 mx-2">{subTitle}</p>
      <h4 className="py-4 text-teal-600">{intro}</h4>
      {tools.map((tool) => (
        <TechnoTitle key={tool}>{tool}</TechnoTitle>
      ))}
    </div>
  );
};

export default Card;
