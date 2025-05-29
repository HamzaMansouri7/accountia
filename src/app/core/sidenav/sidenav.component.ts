import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavService, SidenavMenuItem } from './sidenav.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  template: `
    <nav class="sidenav" [class.rtl]="direction === 'rtl'">
      <div class="sidenav-header">
        <span class="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#E7AC28"/>
            <text x="16" y="22" text-anchor="middle" fill="#fff" font-size="18" font-family="Open Sans" font-weight="bold">C</text>
          </svg>
        </span>
        <span class="company-name">Accountia</span>
      </div>
      <ul class="sidenav-menu">
        <li *ngFor="let item of menuItems"
            class="menu-item"
            [class.active]="isActive(item.route)"
            (click)="onMenuClick(item)">
          <img class="icon" [src]="item.icon" [alt]="item.label | translate" />
          <span class="label">{{ item.label | translate }}</span>
          <span class="dropdown" *ngIf="item.hasDropdown">▼</span>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  direction: string = 'ltr';
  menuItems: SidenavMenuItem[] = [];
  openDropdown: string | null = null;
  collapsed = false;
  constructor(
    private languageService: LanguageService,
    private sidenavService: SidenavService,
    private router: Router
  ) {
    this.languageService.getCurrentDirection().subscribe(dir => this.direction = dir);
    this.menuItems = this.sidenavService.getMenuItems();
    console.log('Sidenav menu items:', this.menuItems);
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  onMenuClick(item: SidenavMenuItem, event?: MouseEvent) {
    console.log('Menu item clicked:', item);
    if (item.hasDropdown) {
      if (this.openDropdown === item.route) {
        console.log('Closing dropdown for:', item.route);
        this.openDropdown = null;
      } else {
        console.log('Opening dropdown for:', item.route);
        this.openDropdown = item.route;
      }
      if (event) event.stopPropagation();
    } else {
      console.log('Navigating to:', item.route);
      this.sidenavService.navigateTo(item.route);
    }
  }

  toggleSidenav() {
    this.collapsed = !this.collapsed;
  }
} 