import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-authenticate',
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
