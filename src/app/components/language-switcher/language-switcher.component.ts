import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: `
    <div class="language-switcher">
      <button (click)="switchLanguage('en')" [class.active]="currentLang === 'en'">English</button>
      <button (click)="switchLanguage('ar')" [class.active]="currentLang === 'ar'">العربية</button>
    </div>
  `,
  styles: [`
    .language-switcher {
      display: flex;
      gap: 10px;
    }
    button {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      cursor: pointer;
    }
    button.active {
      background: #007bff;
      color: white;
      border-color: #0056b3;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: string = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
} 