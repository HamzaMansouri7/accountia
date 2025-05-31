import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()" class="theme-toggle-btn">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  `,
  styles: [`
    .theme-toggle-btn {
      padding: 8px 16px;
      background: #4F2566;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.2s;
    }
    .theme-toggle-btn:hover {
      background: #72418B;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }
} 