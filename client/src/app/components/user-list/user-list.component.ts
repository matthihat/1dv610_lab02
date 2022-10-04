import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/User.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listenForUserAdded()
  }

  private listenForUserAdded() {
    this.userService.userAdded$.subscribe(user => this.users.push(user))
  }

  shouldDisableClearButton(): boolean {
    if(this.users.length < 1) {
      return true
    }
    return false
  }

  handleClear() {
    this.users = [];
  }

  get isUsersEmpty(): boolean {
    if (this.users.length == 0) {
      return true
    }
    return false
  }

}
