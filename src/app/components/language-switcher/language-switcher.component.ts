import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
  flag: string;
  direction: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  isOpen = false;
  currentLang = 'en';

  languages: Language[] = [
    {
      code: 'en',
      name: 'English (LTR language)',
      flag: 'https://flagcdn.com/w40/gb.png',
      direction: 'ltr'
    },
    {
      code: 'ar',
      name: 'Arabic (RTL language)',
      flag: 'https://flagcdn.com/w40/iq.png',
      direction: 'rtl'
    }
  ];

  constructor(
    private eRef: ElementRef,
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {}

  @HostListener('document:mousedown', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  get currentLanguage(): Language {
    return this.languages.find(l => l.code === this.currentLang)!;
  }

  selectLanguage(code: string) {
    this.currentLang = code;
    this.languageService.setLanguage(code);
    this.translateService.use(code);
    this.isOpen = false;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
} 