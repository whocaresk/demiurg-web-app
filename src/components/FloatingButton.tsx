import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createCell } from '../redux/features/cells';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 15px;
  right: 15px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  color: white;
  background: #593471;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  height: 40px;

  :hover {
    background: #5e3f72;
  }

  :active {
    background: #51246f;
  }
`;

export const FloatingButton: FunctionComponent<any> = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(createCell());
  }, []);

  return (
    <Container>
      <Button onClick={handleClick}>Сотворить</Button>
    </Container>
  );
};
