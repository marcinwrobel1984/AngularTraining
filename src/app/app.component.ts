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
      isPremiumMember: true,
      birthday: 633913200000
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jan.kowalski@company.com",
      isPremiumMember: false,
      birthday: 395272800000
    },
    {
      firstName: "Joanna",
      lastName: "Nowak",
      email: "joanna.nowak@company.com",
      isPremiumMember: false,
      birthday: -162349200000
    }
  ];

  constructor() { }

  public ngOnInit(): void { }
}
