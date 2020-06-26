import React, { useContext } from 'react';
import styled from 'styled-components';

import MainContext from 'contexts/MainContext';
import { Image, Title, Text, Button } from 'components';

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow: hidden;

  max-width: 450px;
  min-width: 280px;
  background-color: white;
  border-radius: 2px;
  margin: 20px;
  box-shadow: 0 0 10px #dedede;

  & > .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px 20px;
  }

  & button {
    align-self: flex-end;
    margin-top: auto !important;
  }
`;

const Card = ({ title = '', subtitle = '', content = '' }) => {
  const { color, incrementRandomize } = useContext(MainContext);

  return (
    <StyledCard>
      <Image src={'./assets/image.png'} alt={subtitle} />
      <div className="content">
        <Title level={3} color={color || 2}>
          {title}
        </Title>
        <Title level={4}>{subtitle}</Title>
        <Text>{content}</Text>
        <Button handleClick={incrementRandomize}>Lire L'article</Button>
      </div>
    </StyledCard>
  );
};

export default Card;
