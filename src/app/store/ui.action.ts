export class CollapseSidenav {
  static readonly type = '[UI] Collapse Sidenav';
}

export class ExpandSidenav {
  static readonly type = '[UI] Expand Sidenav';
}

export class ToggleSidenav {
  static readonly type = '[UI] Toggle Sidenav';
}

export class SetDirection {
  static readonly type = '[UI] Set Direction';
  constructor(public direction: 'ltr' | 'rtl') {}
} 