import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavService, SidenavMenuItem } from './sidenav.service';
import { Router, RouterModule } from '@angular/router';
import { Store, Select, Actions, ofActionDispatched } from '@ngxs/store';
import { UiState } from '../../store/ui.state';
import { CollapseSidenav, ExpandSidenav, ToggleSidenav } from '../../store/ui.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  direction: string = 'ltr';
  menuItems: SidenavMenuItem[] = [];
  openDropdown: string | null = null;
  @Select(UiState.sidenavCollapsed) collapsed$!: Observable<boolean>;
  collapsed: boolean = false;
  @Output() collapsedChange = new EventEmitter<boolean>();
  private actionsSub!: Subscription;

  constructor(
    private languageService: LanguageService,
    private sidenavService: SidenavService,
    private router: Router,
    private store: Store,
    private actions$: Actions
  ) {
    this.languageService.getCurrentDirection().subscribe(dir => this.direction = dir);
    this.menuItems = this.sidenavService.getMenuItems();
  }

  ngOnInit() {
    this.collapsed$?.subscribe(val => {
      this.collapsed = val;
      this.collapsedChange.emit(val);
    });
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.actionsSub = this.actions$
      .pipe(ofActionDispatched(ToggleSidenav, CollapseSidenav, ExpandSidenav))
      .subscribe(action => {
        // You can add custom logic here if needed when actions are dispatched
        // For now, just log
        console.log('Sidenav action dispatched:', action);
      });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.actionsSub) this.actionsSub.unsubscribe();
  }

  handleResize = () => {
    if (window.innerWidth <= 991) {
      this.store.dispatch(new CollapseSidenav());
    } else {
      this.store.dispatch(new ExpandSidenav());
    }
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
    this.store.dispatch(new ToggleSidenav());
  }
} 