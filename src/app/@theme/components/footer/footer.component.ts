import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> and edited by <b><a href="https://github.com/maraun" target="_blank">maraun</a></b> 2019</span>
  `,
})
export class FooterComponent {
}
