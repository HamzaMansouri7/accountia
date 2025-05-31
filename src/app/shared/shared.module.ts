import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { CompanySelectorComponent } from './company-selector/company-selector.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [LanguageSwitcherComponent, CompanySelectorComponent, UsersListComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LanguageSwitcherComponent, CompanySelectorComponent, UsersListComponent]
})
export class SharedModule {} 