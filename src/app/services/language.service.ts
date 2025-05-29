import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('en');
  private currentDirection = new BehaviorSubject<string>('ltr');

  constructor() {
    // Initialize with browser language or default to English
    const browserLang = navigator.language.split('-')[0];
    this.setLanguage(browserLang === 'ar' ? 'ar' : 'en');
  }

  setLanguage(lang: string) {
    this.currentLang.next(lang);
    this.currentDirection.next(lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getCurrentLang() {
    return this.currentLang.asObservable();
  }

  getCurrentDirection() {
    return this.currentDirection.asObservable();
  }
} 