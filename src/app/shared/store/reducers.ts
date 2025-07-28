import { createReducer, on } from '@ngrx/store';
import {
  addTodoItem,
  changeFilter,
  changeListOrder,
  changeTodoStatus,
  clearCompletedTodoItems,
  deleteTodoItem,
} from './actions';
import { Filter, TodoState } from '../interfaces/interface';
import { mock_data } from '../mockData';

export const initialState: TodoState = {
  list: mock_data,
  selectedFilter: Filter.All,
};

export const todoReducer = createReducer(
  initialState,
  on(addTodoItem, (state, { id, title, completed }) => ({
    ...state,
    list: [...state.list, { id, title, completed }],
  })),
  on(changeTodoStatus, (state, { id, completed }) => ({
    ...state,
    list: state.list.map((i) =>
      i.id === id ? { ...i, completed: completed } : i
    ),
  })),
  on(deleteTodoItem, (state, { id }) => ({
    ...state,
    list: state.list.filter((i) => i.id != id),
  })),
  on(clearCompletedTodoItems, (state) => ({
    ...state,
    list: state.list.filter((i) => !i.completed),
  })),
  on(changeFilter, (state, { filter }) => ({
    ...state,
    selectedFilter: filter,
  })),
  on(changeListOrder, (state, { tasks }) => ({ ...state, list: [...tasks] }))
);
