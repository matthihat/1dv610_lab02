import { Inject, Injectable, Injector } from '@angular/core';
import { User } from 'src/app/models/user/User.model.js';
// @ts-ignore
import UserRandomizer from '../../module/src/index.js'
import { UserService } from '../user/user.service'

@Injectable({
  providedIn: 'root'
})
export class UserRandomizerService {

  userRandomizer: UserRandomizer;

  constructor(private userService: UserService) {
    this.userRandomizer = new UserRandomizer();
   }

   addUser(username: string) {
    this.userService.add({name: username})
    this.userRandomizer.addUser(username)
   }

   generateRandomUser(): User {
    return this.userRandomizer.getRandomUser()
   }


}
