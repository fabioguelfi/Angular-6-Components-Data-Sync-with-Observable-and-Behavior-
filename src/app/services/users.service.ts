import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public user = new BehaviorSubject<string>("guelfi");
  public cast = this.user.asObservable();

  constructor() { }

  public editUser(newUser): void {
    this.user.next(newUser);
  }
}
