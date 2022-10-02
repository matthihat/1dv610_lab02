import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  usernameFormControl = new FormControl('', Validators.required)

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.usernameFormControl.value)
  }

}
