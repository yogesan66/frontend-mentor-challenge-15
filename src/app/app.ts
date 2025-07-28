import { Component } from '@angular/core';
import { Todo } from './components/todo/todo';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Todo, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'todo-app-main';
}
