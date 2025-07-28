import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoFilters } from '../todo-filters/todo-filters';
import { TodoItem } from '../todo-item/todo-item';
import { CommonModule } from '@angular/common';
import { Task } from '../../shared/interfaces/interface';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  imports: [TodoFilters, TodoItem, CommonModule, DragDropModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnChanges {
  balanceItems: number = 0;

  @Input() list: any = [];
  @Output() changeStatus = new EventEmitter();
  @Output() deleteTask = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() changeOrder = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list'] && changes['list'].currentValue) {
      const list = changes['list'].currentValue;
      const completedTasks = list.filter((i: Task) => i.completed).length;
      this.balanceItems = list.length - completedTasks;
      this.cdr.detectChanges();
    }
  }

  changeTaskStatus(id: string, completed: boolean): void {
    this.changeStatus.emit({ id, completed });
  }

  deleteItem(id: string): void {
    this.deleteTask.emit(id);
  }

  clearAll(): void {
    this.clear.emit();
  }

  trackById(index: number, item: Task): string {
    return item.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.currentIndex !== event.previousIndex) {
      const clonedList = [...this.list];
      moveItemInArray(clonedList, event.previousIndex, event.currentIndex);
      this.list = clonedList;
      this.changeOrder.emit(this.list);
      this.cdr.detectChanges();
    }
  }
}
