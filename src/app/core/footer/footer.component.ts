import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UiState } from '../../store/ui.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
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