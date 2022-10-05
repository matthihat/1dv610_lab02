import { Injectable } from '@angular/core';
import { formOptions } from 'src/app/models/forms/text-input.model';

@Injectable({
  providedIn: 'root'
})
export class FormOptionsService {

  constructor() { }

  public createUsernameFormOptions(): formOptions {
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
      placeholder: 'ex. John Doe',
      label: 'Username'
    }
  }

  public createTaskFormOptions(): formOptions {
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
          errorMessage: "Please enter a task"
        }
      },
      title: 'New task',
      placeholder: 'Buy groceries',
      label: 'Task'
    }
  }
}
