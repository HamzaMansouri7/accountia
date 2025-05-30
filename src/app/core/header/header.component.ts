import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { CompanySelectorComponent } from '../../shared/company-selector/company-selector.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {} 