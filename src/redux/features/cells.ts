import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../thunk/app-thunk.type';

export interface CellsStore {
  data: Cell[];
}

export interface Cell {
  id: string;
  type: CellType;
}

export enum CellType {
  DEAD = 'dead',
  ALIVE = 'alive',
  LIFE = 'life',
}

const initialState: CellsStore = {
  data: [],
};

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    create: (state, action) => {
      const { cell } = action.payload;
      state.data.push(cell);
    },
    kill: (state) => {
      const cell = state.data
        //копируем
        .slice()
        //разворачиваем
        .reverse()
        //.find возвращает первое совпадение
        .find(({ type }) => type === CellType.LIFE);

      if (cell) {
        cell.type = CellType.DEAD;
      }
    },
  },
});

const getId = () => Math.random().toString(16);
const rollTheDice = () => Math.round(Math.random());
const { create, kill } = cellsSlice.actions;

const shouldCreateLife = (cells: Cell[]) =>
  cells.length === 2 && cells.every(({ type }) => type === CellType.ALIVE);

const shouldKillLife = (cells: Cell[]) =>
  cells.length === 3 && cells.every(({ type }) => type === CellType.DEAD);

export const createCell = (): AppThunk => (dispatch, getState) => {
  const cell: Cell = {
    id: getId(),
    type: rollTheDice() ? CellType.DEAD : CellType.ALIVE,
  };

  dispatch(create({ cell }));

  const lastThree = getState().cells.data.slice(-3);
  const lastTwo = lastThree.slice(-2);

  if (shouldCreateLife(lastTwo)) {
    dispatch(
      create({
        cell: {
          id: getId(),
          type: CellType.LIFE,
        },
      }),
    );
  }

  if (shouldKillLife(lastThree)) {
    dispatch(kill());
  }
};

export const cells = cellsSlice.reducer;
