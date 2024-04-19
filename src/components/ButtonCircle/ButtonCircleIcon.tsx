import React from 'react';

interface IconProps {
  icon: React.ReactNode;
}

export const ButtonCircleIcon: React.FC<IconProps> = ({icon}) => {
  return <>{icon}</>;
};
