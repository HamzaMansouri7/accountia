import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidenavComponent, LanguageSwitcherComponent],
  template: `
    <div class="app-container" [dir]="currentDirection">
      <app-header></app-header>
      <app-sidenav></app-sidenav>
      <app-language-switcher></app-language-switcher>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentDirection: string = 'ltr';

  constructor(private languageService: LanguageService) {
    this.languageService.getCurrentDirection().subscribe((dir: string) => {
      this.currentDirection = dir;
    });
  }
}