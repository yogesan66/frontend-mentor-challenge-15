import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, Checkbox],
  templateUrl: './todo-item.html',
})
export class TodoItem {
  @Input() title = '';
  @Input() completed = false;
  @Input() customClass: string = '';
  @Output() clickEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  onClick(): void {
    this.clickEvent.emit();
  }

  deleteClicked(): void {
    this.deleteEvent.emit();
  }
}
