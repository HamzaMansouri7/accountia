import { Component, HostBinding, OnDestroy, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { CompanySelectorComponent } from '../../shared/company-selector/company-selector.component';
import { Store } from '@ngxs/store';
import { UiState } from '../../store/ui.state';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { UserListItem } from '../../shared/users-list/users-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() direction$!: Observable<'ltr' | 'rtl'>;
  sidenavCollapsed$!: Observable<boolean>;
  @HostBinding('style.marginLeft') marginLeft: string = '240px';
  @HostBinding('style.marginRight') marginRight: string = '';
  private sub!: Subscription;

  users: UserListItem[] = [
    { id: '1', name: 'John Doe', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Jane Smith', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '3', name: 'Alice Brown', avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '4', name: 'Bob White', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: '5', name: 'John Doe', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '6', name: 'Jane Smith', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' }
  ];
  selectedUserId: string = '1';

  constructor(private store: Store) {}

  ngOnInit() {
    this.sidenavCollapsed$ = this.store.select(UiState.sidenavCollapsed);
    this.sub = combineLatest([
      this.direction$,
      this.sidenavCollapsed$
    ]).subscribe(([dir, collapsed]) => {
      if (dir === 'rtl') {
        this.marginLeft = '';
        this.marginRight = collapsed ? '62px' : '240px';
      } else {
        this.marginLeft = collapsed ? '62px' : '240px';
        this.marginRight = '';
      }
    });
  }

  onUserSelected(user: UserListItem) {
    this.selectedUserId = user.id;
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
} 