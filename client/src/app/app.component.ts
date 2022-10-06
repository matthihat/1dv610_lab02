import { Component } from '@angular/core';
import { formOptions } from './services/forms/form-options.model';
import { User } from './models/user/User.model';
import { FormOptionsService } from './services/forms/form-options.service';
import { UserRandomizerService } from './services/randomizer/user-randomizer.service';
import { UserService } from './services/user/user.service';
import { ListOptions } from './services/lists/list-options.model';
import { ListOptionsService } from './services/lists/list-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  userNameFormOptions: formOptions;
  taskFormOptions: formOptions;
  userListOptions: ListOptions;
  usernames: string[] = []

  constructor(
    private formOptionService: FormOptionsService,
    private listOptionsService: ListOptionsService,
    private userService: UserService) {
    this.userNameFormOptions = this.formOptionService.createUsernameFormOptions()
    this.taskFormOptions = this.formOptionService.createTaskFormOptions()
    this.userListOptions = this.listOptionsService.createUserListOptions()
    this.registerSubscriptions()
  }

  private registerSubscriptions() {
    this.userService.userAdded$.subscribe(() => this.onUserAdded())

    this.userService.usersRemoved$.subscribe(() => this.onUsersRemoved())
  }

  private onUserAdded() {
    this.usernames = this.userService.getUsers().map(user => user.name)
  }

  private onUsersRemoved() {
    this.usernames = []
  }

  public onUsernameTextEvent(username: string) {
    const user: User = {
      name: username
    }
    this.userService.add(user)
  }

  public onClearListEvent() {
    this.userService.removeUsers()
    // this.usernames = []
  }
}
