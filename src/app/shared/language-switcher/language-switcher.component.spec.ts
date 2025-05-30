import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let languageService: jasmine.SpyObj<LanguageService>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    const languageServiceSpy = jasmine.createSpyObj('LanguageService', ['setLanguage', 'getCurrentLang']);
    const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['use']);

    languageServiceSpy.getCurrentLang.and.returnValue(new BehaviorSubject('en'));

    await TestBed.configureTestingModule({
      imports: [CommonModule, LanguageSwitcherComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceSpy },
        { provide: TranslateService, useValue: translateServiceSpy }
      ]
    }).compileComponents();

    languageService = TestBed.inject(LanguageService) as jasmine.SpyObj<LanguageService>;
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with English as default language', () => {
    expect(component.currentLang).toBe('en');
  });

  it('should have two language options', () => {
    expect(component.languages.length).toBe(2);
    expect(component.languages[0].code).toBe('en');
    expect(component.languages[1].code).toBe('ar');
  });

  it('should toggle dropdown when toggleDropdown is called', () => {
    expect(component.isOpen).toBeFalse();
    component.toggleDropdown();
    expect(component.isOpen).toBeTrue();
    component.toggleDropdown();
    expect(component.isOpen).toBeFalse();
  });

  it('should switch language and close dropdown when switchLanguage is called', () => {
    component.isOpen = true;
    component.switchLanguage('ar');
    
    expect(languageService.setLanguage).toHaveBeenCalledWith('ar');
    expect(translateService.use).toHaveBeenCalledWith('ar');
    expect(component.isOpen).toBeFalse();
  });

  it('should return current language object', () => {
    const currentLang = component.getCurrentLanguage();
    expect(currentLang.code).toBe('en');
    expect(currentLang.name).toBe('English');
    expect(currentLang.flag).toBe('🇬🇧');
  });
}); 