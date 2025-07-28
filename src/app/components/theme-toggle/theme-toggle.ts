import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    this.setMode();
  }

  changeDarkMode(value: boolean): void {
    localStorage.setItem('dark', value.toString());
    this.setMode();
  }

  setMode(): void {
    let dark = localStorage.getItem('dark');
    this.isDarkMode = dark === 'true';
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
