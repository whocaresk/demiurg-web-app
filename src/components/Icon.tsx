import React, { FunctionComponent } from 'react';
import { CellType } from '../redux/features/cells';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type: CellType;
}

const Container = styled.div<ContainerProps>`
  ${(props) => getBackgroundCss(props.type)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.25rem;
`;

const getEmoji = (type: CellType): string => {
  switch (type) {
    case CellType.DEAD:
      return '💀';
    case CellType.ALIVE:
      return '💥';
    case CellType.LIFE:
      return '🐣';

    default:
      throw new Error('Родился ксеноморф, все по спасательным капсулам!');
  }
};

const getBackgroundCss = (type: CellType): ReturnType<typeof css> => {
  switch (type) {
    case CellType.DEAD:
      return css`
        background: linear-gradient(rgb(30, 111, 145), rgb(170, 248, 177));
      `;
    case CellType.ALIVE:
      return css`
        background: linear-gradient(rgb(253, 185, 7), rgb(253, 245, 174));
      `;
    case CellType.LIFE:
      return css`
        background: linear-gradient(rgb(176, 7, 252), rgb(252, 173, 231));
      `;

    default:
      throw new Error('Родился ксеноморф, все по спасательным капсулам!');
  }
};

interface IconProps {
  type: CellType;
}

export const Icon: FunctionComponent<IconProps> = ({ type }) => {
  return <Container type={type}>{getEmoji(type)}</Container>;
};
