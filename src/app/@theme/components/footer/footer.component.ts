import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://wen-tao.com/" target="_blank">wentao </a></b> 2018</span>
    <div class="socials">
      <a href="https://github.com/gdouzwt" target="_blank" class="ion ion-social-github"></a>
      <a href="https://twitter.com/gdouzwt" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
