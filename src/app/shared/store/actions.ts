import { createAction, props } from '@ngrx/store';
import { Filter, Task } from '../interfaces/interface';

export const addTodoItem = createAction('[Todo] add item', props<Task>());
export const changeTodoStatus = createAction(
  '[Todo] change status',
  props<{ id: string; completed: boolean }>()
);
export const deleteTodoItem = createAction(
  '[Todo] delete item',
  props<{ id: string }>()
);
export const clearCompletedTodoItems = createAction(
  '[Todo] clear completed items'
);
export const changeFilter = createAction(
  '[Todo] change filter',
  props<{ filter: Filter }>()
);
export const changeListOrder = createAction(
  '[Todo] change order list',
  props<{ tasks: Task[] }>()
);
