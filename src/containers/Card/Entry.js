import React, { useContext } from 'react';
import styled from 'styled-components';

import MainContext from 'contexts/MainContext';
import { Image, Title, Text, Button } from 'components';

const StyledCard = styled.li`
  list-style: none;
  overflow: hidden;

  max-width: 450px;
  background-color: white;
  border-radius: 2px;
  margin: 20px;
  box-shadow: 0 0 10px #dedede;

  & > .content {
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
  }
`;

const Card = ({ title = '', subtitle = '', content = '' }) => {
  const { color, increment, randomizeColor } = useContext(MainContext);

  return (
    <StyledCard>
      <Image src={'./assets/image.png'} alt={subtitle} />
      <div className="content">
        <Title level={3}>{title}</Title>
        <Title level={4} color={color}>
          {subtitle}
        </Title>
        <Text>{content}</Text>
        <Button handleClick={(increment, randomizeColor)} align="left">
          Lire L'article
        </Button>
      </div>
    </StyledCard>
  );
};

export default Card;
