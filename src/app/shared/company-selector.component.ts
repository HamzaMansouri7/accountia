import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Company {
  id: number;
  name: string;
  badge: string;
  selected: boolean;
}

@Component({
  selector: 'app-company-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.scss']
})
export class CompanySelectorComponent {
  isOpen = false;
  companies: Company[] = [
    { id: 1, name: 'company.name1', badge: 'C', selected: true },
    { id: 2, name: 'company.name2', badge: 'C', selected: false }
  ];

  get selectedCompany() {
    return this.companies.find(c => c.selected)!;
  }

  selectCompany(company: Company) {
    this.companies.forEach(c => c.selected = false);
    company.selected = true;
    this.isOpen = false;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
} 