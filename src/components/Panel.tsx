import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { useSelector } from 'react-redux';
import { RootStore } from '../redux/root-reducer';
import { Cell, CellType } from '../redux/features/cells';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 100%;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;
`;

const TextContainer = styled.div``;

const Header = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 7px;
`;

const Description = styled.div`
  font-size: 0.9rem;
`;

const Empty = styled.div`
  text-align: center;
  color: white;
`;

const getHeaderText = (type: CellType): string => {
  switch (type) {
    case CellType.DEAD:
      return 'Мёртвая';
    case CellType.ALIVE:
      return 'Живая';
    case CellType.LIFE:
      return 'Жизнь';

    default:
      throw new Error('Родился ксеноморф, все по спасательным капсулам!');
  }
};

const getDescriptionText = (type: CellType): string => {
  switch (type) {
    case CellType.DEAD:
      return 'или прикидывается';
    case CellType.ALIVE:
      return 'и шевелится!';
    case CellType.LIFE:
      return 'Ку-ку!';

    default:
      throw new Error('Родился ксеноморф, все по спасательным капсулам!');
  }
};

interface PanelProps {
  cell: Cell;
}

const Panel: FunctionComponent<PanelProps> = ({ cell }) => {
  return (
    <PanelContainer>
      <Icon type={cell.type} />
      <TextContainer>
        <Header>{getHeaderText(cell.type)}</Header>
        <Description>{getDescriptionText(cell.type)}</Description>
      </TextContainer>
    </PanelContainer>
  );
};

interface PanelListProps {}

export const PanelList: FunctionComponent<PanelListProps> = () => {
  const cells = useSelector((state: RootStore) => state.cells);

  return (
    <ListContainer>
      {!cells.data.length && (
        <Empty>Нажмите на кнопку ниже, чтобы сотворить первую клетку</Empty>
      )}
      {!!cells.data.length &&
        cells.data.map((cell) => <Panel key={cell.id} cell={cell} />)}
    </ListContainer>
  );
};
