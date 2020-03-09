import { Component, OnInit } from '@angular/core';
import { BaseHttpClientService } from './core/base-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      isPremiumMember: true
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jan.kowalski@company.com",
      isPremiumMember: false
    },
    {
      firstName: "Joanna",
      lastName: "Nowak",
      email: "joanna.nowak@company.com",
      isPremiumMember: false
    }
  ];

  constructor() { }

  public ngOnInit(): void { }
}
