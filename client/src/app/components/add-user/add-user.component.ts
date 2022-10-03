import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { User } from 'src/app/models/user/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements AfterViewInit {

  @ViewChild('submitButton')
  private submitButton!: MatButton;

  constructor(private userService: UserService) { }

  usernameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)])

  ngAfterViewInit(): void {
    this.submitButton.disabled = true
    this.toggleSubmitButton()
  }

  public onInput() {
    this.toggleSubmitButton()
  }

  public onSubmit() {
    if (this.isFormValid()) {
      this.addUser()
    }
  }

  //TODO gör ett objekt med felmeddelande o error-strind desc?
  public getErrorMessage(): string {
    if(this.usernameFormControl.hasError('required')) {
      return "Please enter a username"
    }

    if(this.usernameFormControl.hasError('minlength')) {
      return "Must be at least 3 characters"
    }

    if(this.usernameFormControl.hasError('maxlength')) {
      return "Must not be longer than 24 characters"
    }

    return ''
  }

  private isFormValid() {
    if (this.usernameFormControl.valid && this.usernameFormControl.value) {
      return true
    }
    return false
  }

  private addUser() {
    if(this.usernameFormControl.value) {
      const user: User = { name: this.usernameFormControl.value}
      this.userService.add(user)
    }
  }

  private toggleSubmitButton() {
    if(this.usernameFormControl.invalid) {
      this.submitButton.disabled = true
    } else {
      this.submitButton.disabled = false
    }
  }

}
