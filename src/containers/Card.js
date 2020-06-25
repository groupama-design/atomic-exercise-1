import React, { useContext } from 'react';

const Card = ({ title, subtitle, content }) => {
  useContext();

  return (
    <div>
      <Image src={'./assets/image.png'} alt={subtitle} />
      <Title>{{ title }}</Title>
      <Title>{{ subtitle }}</Title>
      <Text>{{ content }}</Text>
    </div>
  );
};

export default Card;
