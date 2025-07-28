import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle implements OnInit {
  isLightMode: boolean = false;

  ngOnInit(): void {
    this.setMode();
  }

  isLightModeOn(value: boolean): void {
    localStorage.setItem('lightMode', value.toString());
    this.setMode();
  }

  setMode(): void {
    let mode = localStorage.getItem('lightMode');
    this.isLightMode = mode === 'true';
    document.documentElement.classList.toggle('dark', !this.isLightMode);
  }
}
