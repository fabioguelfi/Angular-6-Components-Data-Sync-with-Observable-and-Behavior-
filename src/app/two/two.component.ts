import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-two",
  templateUrl: "./two.component.html",
  styleUrls: ["./two.component.css"]
})
export class TwoComponent implements OnInit {
  public us: string;
  public userEdit: string;

  constructor(private users: UsersService) {}

  ngOnInit() {
    this.users.cast.subscribe(user => {
      this.us = user;
    });
  }

  private userEditNow(): void {
    this.users.editUser(this.userEdit);
  }

}
