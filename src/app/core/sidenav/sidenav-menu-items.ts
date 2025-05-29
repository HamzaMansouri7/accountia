export interface SidenavMenuItem {
  label: string;
  icon: string; // icon key
  active?: boolean;
}

export const SIDENAV_MENU_ITEMS: SidenavMenuItem[] = [
  { label: 'Dashboard', icon: 'dashboard', active: true },
  { label: 'Invoices', icon: 'invoices' },
  { label: 'Contact', icon: 'contact' },
  { label: 'Warehouse', icon: 'warehouse' },
  { label: 'Product', icon: 'product' },
  { label: 'Fees', icon: 'fees' },
  { label: 'Employees', icon: 'employees' },
  { label: 'Salary', icon: 'salary' },
  { label: 'Reports', icon: 'reports' }
]; 