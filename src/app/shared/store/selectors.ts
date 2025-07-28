import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter, TodoState } from '../interfaces/interface';

export const todoFeatureSelector = createFeatureSelector<TodoState>('todo');
export const todoListSelector = createSelector(
  todoFeatureSelector,
  (state: TodoState) => state.list
);
export const selectedFilterSelector = createSelector(
  todoFeatureSelector,
  (state: TodoState) => state.selectedFilter
);
export const filteredListSelector = createSelector(
  todoListSelector,
  selectedFilterSelector,
  (list, filter) => {
    switch (filter) {
      case Filter.Active:
        return list.filter((i) => !i.completed);
      case Filter.Completed:
        return list.filter((i) => i.completed);
      default:
        return list;
    }
  }
);
