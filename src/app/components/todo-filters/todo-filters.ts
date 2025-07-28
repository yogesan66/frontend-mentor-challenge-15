import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedFilterSelector } from '../../shared/store/selectors';
import { CommonModule } from '@angular/common';
import { Filter } from '../../shared/interfaces/interface';
import { changeFilter } from '../../shared/store/actions';

@Component({
  selector: 'app-todo-filters',
  imports: [CommonModule],
  templateUrl: './todo-filters.html',
  styleUrl: './todo-filters.scss',
})
export class TodoFilters {
  all = Filter.All;
  active = Filter.Active;
  done = Filter.Completed;

  private store = inject(Store);
  selectedFilter$ = this.store.select(selectedFilterSelector);

  changeFilter(filter: Filter): void {
    this.store.dispatch(changeFilter({ filter }));
  }
}
