import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user/User.model';
// @ts-ignore
import UserRandomizer from '../../module/src/index.js'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private userSource = new Subject<User>();
  private usersRemovedSource = new Subject<boolean>()
  private userRandomizer: UserRandomizer
  public readonly userAdded$ = this.userSource.asObservable();
  public readonly usersRemoved$ = this.usersRemovedSource.asObservable()

  constructor() {
    this.userRandomizer = new UserRandomizer();
   }

  add(user: User) {
    this.users.push(user)
    this.userSource.next(user);
    this.userRandomizer.addUser(user.name)
  }

  getUsers(): User[] {
    return this.users
  }

  removeUsers(): void {
    this.users = []
    this.usersRemovedSource.next(true)
  }

  getRandomUser(): User {
    return this.userRandomizer.getRandomUser()
   }
}

