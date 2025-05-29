import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface SidenavMenuItem {
  icon: string;
  label: string;
  route: string;
  hasDropdown?: boolean;
  children?: SidenavMenuItem[];
}

@Injectable({ providedIn: 'root' })
export class SidenavService {
  menuItems: SidenavMenuItem[] = [
    { icon: 'assets/svg/dashboard.svg', label: 'navigation.dashboard', route: '/dashboard' },
    { icon: 'assets/svg/invoices.svg', label: 'navigation.invoices', route: '/invoices' },
    { icon: 'assets/svg/contact.svg', label: 'navigation.contact', route: '/contact' },
    { icon: 'assets/svg/warehouse.svg', label: 'navigation.warehouse', route: '/warehouse' },
    { icon: 'assets/svg/product.svg', label: 'navigation.product', route: '/product' },
    { icon: 'assets/svg/fees.svg', label: 'navigation.fees', route: '/fees' },
    { icon: 'assets/svg/employees.svg', label: 'navigation.employees', route: '/employees' },
    { icon: 'assets/svg/salary.svg', label: 'navigation.salary', route: '/salary' },
    {
      icon: 'assets/svg/reports.svg',
      label: 'navigation.reports',
      route: '/reports',
      hasDropdown: true,
      children: [
        { icon: 'assets/svg/reports.svg', label: 'reports.sales', route: '/reports/sales' },
        { icon: 'assets/svg/reports.svg', label: 'reports.finance', route: '/reports/finance' },
        { icon: 'assets/svg/reports.svg', label: 'reports.inventory', route: '/reports/inventory' }
      ]
    },
  ];

  constructor(private router: Router) {}

  getMenuItems() {
    return this.menuItems;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
} 