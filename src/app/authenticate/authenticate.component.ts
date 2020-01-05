import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-authenticate',
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card status='success' class='mx-auto' style='width: 800px; margin-top: 3rem;'>
          <nb-card-body class='mx-auto' style='width: 700px'>
              <router-outlet></router-outlet>
          </nb-card-body>
        </nb-card>
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
