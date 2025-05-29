import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  template: `
    <nav class="sidenav" [class.rtl]="direction === 'rtl'">
      <div class="sidenav-header">
        <span class="logo"> <!-- Replace with SVG if available -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#E7AC28"/>
            <text x="16" y="22" text-anchor="middle" fill="#fff" font-size="18" font-family="Open Sans" font-weight="bold">C</text>
          </svg>
        </span>
        <span class="company-name">Accountia</span>
      </div>
      <ul class="sidenav-menu">
        <li class="menu-item active">
          <span class="icon">🏠</span>
          <span class="label">Dashboard</span>
        </li>
        <li class="menu-item">
          <span class="icon">📄</span>
          <span class="label">Invoices</span>
        </li>
        <li class="menu-item">
          <span class="icon">📇</span>
          <span class="label">Contact</span>
        </li>
        <li class="menu-item">
          <span class="icon">🏢</span>
          <span class="label">Warehouse</span>
        </li>
        <li class="menu-item">
          <span class="icon">📦</span>
          <span class="label">Product</span>
        </li>
        <li class="menu-item">
          <span class="icon">💰</span>
          <span class="label">Fees</span>
        </li>
        <li class="menu-item">
          <span class="icon">👥</span>
          <span class="label">Employees</span>
        </li>
        <li class="menu-item">
          <span class="icon">💵</span>
          <span class="label">Salary</span>
        </li>
        <li class="menu-item">
          <span class="icon">📊</span>
          <span class="label">Reports</span>
          <span class="dropdown">▼</span>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .sidenav {
      width: 260px;
      height: 100vh;
      background: #4F2566;
      color: #fff;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      transition: left 0.3s, right 0.3s;
      z-index: 1001;
    }
    .sidenav.rtl {
      left: auto;
      right: 0;
    }
    .sidenav-header {
      display: flex;
      align-items: center;
      height: 72px;
      padding: 0 24px;
      background: #4F2566;
      border-bottom: 1px solid #6B3FA0;
    }
    .logo {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    .company-name {
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #E7AC28;
    }
    .sidenav.rtl .logo {
      margin-right: 0;
      margin-left: 12px;
    }
    .sidenav-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 24px;
    }
    .menu-item {
      display: flex;
      align-items: center;
      padding: 12px 24px;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      border-radius: 4px 0 0 4px;
      transition: background 0.2s, color 0.2s;
    }
    .menu-item .icon {
      margin-right: 16px;
      font-size: 20px;
    }
    .sidenav.rtl .menu-item .icon {
      margin-right: 0;
      margin-left: 16px;
    }
    .menu-item.active, .menu-item:hover {
      background: #6B3FA0;
      color: #E7AC28;
    }
    .dropdown {
      margin-left: auto;
      font-size: 12px;
    }
    .sidenav.rtl .dropdown {
      margin-left: 0;
      margin-right: auto;
    }
  `]
})
export class SidenavComponent {
  direction: string = 'ltr';
  constructor(private languageService: LanguageService) {
    this.languageService.getCurrentDirection().subscribe(dir => this.direction = dir);
  }
} 