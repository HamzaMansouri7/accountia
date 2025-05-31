import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { LanguageSwitcherComponent } from './shared/language-switcher/language-switcher.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { UiState } from './store/ui.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentDirection: string = 'ltr';
  @Select(UiState.sidenavCollapsed) sidenavIsCollapsed$!: Observable<boolean>;

  constructor(
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {
    this.languageService.getCurrentDirection().subscribe((dir: string) => {
      this.currentDirection = dir;
    });
    
    // Initialize translation
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  ngOnInit() {
    this.sidenavIsCollapsed$.subscribe(val => {
      console.log('[AppComponent] sidenavIsCollapsed$', val);
    });
  }
}