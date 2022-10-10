import { Component } from '@angular/core';
import { formOptions } from './services/forms/form-options.model';
import { User } from './models/user/User.model';
import { FormOptionsService } from './services/forms/form-options.service';
// import { UserRandomizerService } from './services/randomizer/user-randomizer.service';
import { UserService } from './services/user/user.service';
import { ListOptions } from './services/lists/list-options.model';
import { ListOptionsService } from './services/lists/list-options.service';
import { TaskService } from './services/task/task.service';
import {v4 as uuidV4 } from 'uuid'

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
  taskListOptions: ListOptions;
  usernames: string[] = []
  tasks: string[] = []
  isTasksAssigned = false
  isShouldClearAssignedTasks = false;

  constructor(
    private formOptionService: FormOptionsService,
    private listOptionsService: ListOptionsService,
    private userService: UserService,
    private taskService: TaskService) {
    this.userNameFormOptions = this.formOptionService.createUsernameFormOptions()
    this.taskFormOptions = this.formOptionService.createTaskFormOptions()
    this.userListOptions = this.listOptionsService.createUserListOptions()
    this.taskListOptions = this.listOptionsService.createTaskListOptions()
    this.registerSubscriptions()
  }

  private registerSubscriptions() {
    this.userService.userAdded$.subscribe(() => this.onUserAdded())
    this.userService.usersRemoved$.subscribe(() => this.onUsersRemoved())
    this.taskService.taskAdded$.subscribe(() => this.onTaskAdded())
    this.taskService.tasksRemoved$.subscribe(() => this.onTasksRemoved())
  }

  private onUserAdded() {
    this.usernames = this.userService.getUsers().map(user => user.name)
  }

  private onUsersRemoved() {
    this.usernames = []
    // this.userService.removeUsers()
  }

  private onTaskAdded() {
    this.tasks = this.taskService.getTasks()
  }

  private onTasksRemoved() {
    this.tasks = []
    // this.taskService.removeTasks()
  }

  public onUsernameTextEvent(username: string) {
    const user = this.constructUser(username)
    this.userService.add(user)
  }

  private constructUser(username: string) {
    return {
      userId: uuidV4(),
      name: username,
      assignedTasks: []
    }
  }

  public onTaskTextEvent(task: string) {
    this.taskService.addTask(task)
  }

  public onClearUserListEvent() {
    this.userService.removeUsers()
    this.isTasksAssigned = false
  }

  public onClearTaskListEvent() {
    this.taskService.removeTasks()
    this.isTasksAssigned = false
  }

  public isTasksReadyToBeAssigned(): boolean {
    if (this.usernames.length > 0 && this.tasks.length > 0 && !this.isTasksAssigned) {
      return true
    }
    return false
  }

  public onAssignTasks() {
    try {
      this.taskService.assignTasksToUsers()
      this.isTasksAssigned = true
    } catch(err) {
      console.error(err)
    }
  }

  public getUsersWithAssignedTasks() {
    if(this.isTasksAssigned) {
      return this.userService.getUsers()
    }
    return undefined
  }
}
