import { Component } from '@angular/core';
import { formOptions } from './models/forms/text-input.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  userNameFormOptions: formOptions;

  constructor() {
    this.userNameFormOptions = this.createUsernameFormOptions()
  }

  private createUsernameFormOptions(): formOptions {
    return {
      validators: {
        minLength: {
          length: 3,
          errorMessage: "Must be at least 3 characters"
        },
        maxLength: {
          length: 24,
          errorMessage: "Must not be longer than 24 characters"
        },
        required: {
          isRequired: true,
          errorMessage: "Please enter a username"
        }
      },
      title: 'Add user',
      placeholder: 'Username'
    }
  }

  onUsernameTextEvent($event: string) {
    console.log("tog emot " + $event)
  }
}
