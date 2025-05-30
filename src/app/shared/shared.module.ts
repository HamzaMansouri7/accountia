import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { CompanySelectorComponent } from './company-selector/company-selector.component';
@NgModule({
  declarations: [LanguageSwitcherComponent, CompanySelectorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LanguageSwitcherComponent, CompanySelectorComponent]
})
export class SharedModule {} 