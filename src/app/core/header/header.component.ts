import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { CompanySelectorComponent } from '../../shared/company-selector/company-selector.component';
import { Store } from '@ngxs/store';
import { UiState } from '../../store/ui.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidenavCollapsed$!: Observable<boolean>;
  @HostBinding('style.marginLeft') marginLeft: string = '240px';
  @HostBinding('style.marginRight') marginRight: string = '';
  private sub!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    const dir = document.documentElement.dir || 'ltr';
    this.sidenavCollapsed$ = this.store.select(UiState.sidenavCollapsed);
    this.sub = this.sidenavCollapsed$.subscribe(collapsed => {
      if (dir === 'rtl') {
        this.marginLeft = '';
        this.marginRight = collapsed ? '62px' : '240px';
      } else {
        this.marginLeft = collapsed ? '62px' : '240px';
        this.marginRight = '';
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
} 