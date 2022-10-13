import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user/User.model';
import {v4 as uuidV4} from 'uuid'
// @ts-ignore
import UserRandomizer from '../../../../../module/src/index.js'

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
    this.userRandomizer.addUserWith(user.userId, user.name)
  }

  getUsers(): User[] {
    return this.users
  }

  removeUsers(): void {
    this.users = []
    this.usersRemovedSource.next(true)
  }

  /**
 * @throws {Error} - An error if no user exist
 */
  getRandomUser(): User {
      const retrievedUser = this.userRandomizer.getRandomUser()
      const user = this.users.find(user => retrievedUser.id === user.userId)
      if(!user) {
        throw new Error('Ingen användare hittades')
      }
      return user
   }
}

