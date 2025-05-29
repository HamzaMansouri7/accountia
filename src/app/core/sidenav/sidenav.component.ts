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
  templateUrl: './sidenav.component.html',
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