import { Inject, Injectable, Injector } from '@angular/core';
import { UserRandomizer } from '../../../module/src/index.js'

@Injectable({
  providedIn: 'root'
})
export class UserRandomizerService {

  userRandomizer: UserRandomizer;
  constructor() {
    this.userRandomizer = new UserRandomizer();
    // this.userRandomizer
   }


}
