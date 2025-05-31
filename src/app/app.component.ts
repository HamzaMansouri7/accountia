import { Component, OnInit, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { LanguageSwitcherComponent } from './shared/language-switcher/language-switcher.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { UiState } from './store/ui.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentDirection: string = 'ltr';
  sidenavIsCollapsed$!: Observable<boolean>;
  private sub!: Subscription;

  constructor(
    private languageService: LanguageService,
    private translateService: TranslateService,
    private store: Store
  ) {
    this.languageService.getCurrentDirection().subscribe((dir: string) => {
      this.currentDirection = dir;
    });
    
    // Initialize translation
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  ngOnInit() {
    this.sidenavIsCollapsed$ = this.store.select(UiState.sidenavCollapsed);
    this.sub = this.sidenavIsCollapsed$.subscribe(val => {
      // Optionally, you can add logic here for app-container or main-content
      // e.g., set a class or style dynamically if needed
      // console.log('[AppComponent] sidenavIsCollapsed$', val);
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}