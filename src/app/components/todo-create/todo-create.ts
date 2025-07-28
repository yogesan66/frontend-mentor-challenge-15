import { Component, EventEmitter, Output } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-create',
  imports: [Checkbox, FormsModule],
  templateUrl: './todo-create.html',
  styleUrl: './todo-create.scss',
})
export class TodoCreate {
  selected: boolean = false;
  task: string = '';

  @Output() addItemEvent = new EventEmitter();

  addItem(event: any) {
    if (event.key === 'Enter' && this.task.trim() != '') {
      let id = uuidv4();
      let title = this.task.charAt(0).toUpperCase() + this.task.slice(1);
      let completed = this.selected;
      this.addItemEvent.emit({ id, title, completed });
      this.selected = false;
      this.task = '';
    }
  }
}
