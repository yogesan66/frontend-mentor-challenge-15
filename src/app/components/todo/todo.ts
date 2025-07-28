import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { TodoCreate } from '../todo-create/todo-create';
import { Store } from '@ngrx/store';
import { filteredListSelector } from '../../shared/store/selectors';
import { Task, UpdateStatus } from '../../shared/interfaces/interface';
import {
  addTodoItem,
  changeListOrder,
  changeTodoStatus,
  clearCompletedTodoItems,
  deleteTodoItem,
} from '../../shared/store/actions';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { TodoFilters } from '../todo-filters/todo-filters';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, TodoList, TodoCreate, ThemeToggle, TodoFilters],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  selected = false;

  private store = inject(Store);
  todoList$ = this.store.select(filteredListSelector);

  changeStatus({ id, completed }: UpdateStatus): void {
    this.store.dispatch(changeTodoStatus({ id, completed }));
  }

  addItem(details: Task): void {
    const { id, title, completed } = details;
    this.store.dispatch(addTodoItem({ id, title, completed }));
  }

  deleteTask(id: string): void {
    this.store.dispatch(deleteTodoItem({ id }));
  }

  clearAllCompleted(): void {
    this.store.dispatch(clearCompletedTodoItems());
  }

  changeOrder(list: Task[]): void {
    this.store.dispatch(changeListOrder({ tasks: list }));
  }
}
