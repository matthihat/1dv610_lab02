import { Component } from '@angular/core';
import { formOptions } from './models/forms/text-input.model';
import { FormOptionsService } from './services/forms/form-options.service';
import { UserRandomizerService } from './services/randomizer/user-randomizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  userNameFormOptions: formOptions;
  taskFormOptions: formOptions;

  constructor(private formOptionService: FormOptionsService,
    private userRandomizerService: UserRandomizerService) {
    this.userNameFormOptions = this.formOptionService.createUsernameFormOptions()
    this.taskFormOptions = this.formOptionService.createTaskFormOptions()
  }

  onUsernameTextEvent(username: string) {
    console.log("tog emot " + username)
    this.userRandomizerService.addUser(username)
  }
}
