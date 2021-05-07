import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { PanelList } from '../components/Panel';
import { FloatingButton } from '../components/FloatingButton';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgb(48, 1, 76), rgb(2, 1, 2));
`;

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: white;
  padding: 20px 0;
`;

export const Home: FunctionComponent<any> = () => {
  return (
    <Container>
      <Header>Клеточное наполнение</Header>
      <PanelList />
      <FloatingButton />
    </Container>
  );
};
