import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public us: string;

  constructor(
    private users: UsersService,
  ) { }

  ngOnInit() {
    this.users.cast.subscribe(user => {
      this.us = user;
    })
  }

}
