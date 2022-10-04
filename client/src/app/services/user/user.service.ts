import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private userSource = new Subject<User>();
  public userAdded$ = this.userSource.asObservable();

  constructor() { }

  add(user: User) {
    //TODO lägga till user i arrayen??
    this.userSource.next(user);
  }
}
