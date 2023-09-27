import React from "react";
import { Typography, Avatar } from "antd";

const RoundedCards = ({ profile, title, subtitle,num ,size}) => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col justify-start items-center rounded-lg bg-customColor shadow-lg p-4 md:max-w-lg min-h-full">
      <Avatar className="my-4" src=<svg xmlns={profile}  viewBox={size}><path fill="darkgreen" d={num}/></svg> size={64} shape="square" />
      <Title level={4}>{title}</Title>
      <span className="text-center text-sm md:text-base">{subtitle}</span>
    </div>
  );
};

export default RoundedCards;
