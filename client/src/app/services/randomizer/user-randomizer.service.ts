import { Inject, Injectable, Injector } from '@angular/core';
// @ts-ignore
import UserRandomizer from '../../module/src/index.js'

@Injectable({
  providedIn: 'root'
})
export class UserRandomizerService {

  userRandomizer: UserRandomizer;

  constructor() {
    this.userRandomizer = new UserRandomizer();
    // this.userRandomizer
   }

   addUser(username: string) {
    this.userRandomizer.addUser(username)
    const user = this.userRandomizer.getRandomUser()
    console.log(user.name)
   }


}
