import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer class="footer">Footer works!</footer>`,
  styles: [`
    .footer {
      width: 100%;
      height: 56px;
      background: #EFEFEF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      color: #888;
    }
  `]
})
export class FooterComponent {} 