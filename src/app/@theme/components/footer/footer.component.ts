import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Powered by Ngx-Admin from <b><a href="https://akveo.com" target="_blank">Akveo</a></b></span>
    <div class="socials">
      <a href="https://www.facebook.com/tantaouniversity" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
