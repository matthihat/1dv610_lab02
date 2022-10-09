import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/User.model';
import { TaskService } from 'src/app/services/task/task.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-assigned-tasks-list',
  templateUrl: './assigned-tasks-list.component.html',
  styleUrls: ['./assigned-tasks-list.component.css']
})
export class AssignedTasksListComponent implements OnInit {

  users: User[] | undefined;

  constructor(private taskService: TaskService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.registerTasksSubscription()
    this.registerUserSubscription()
  }

  private registerTasksSubscription() {
    this.taskService.tasksRemoved$.subscribe(() => this.onRemoval())
    this.taskService.tasksAssigned$.subscribe(() => this.onTasksAssigned())
  }

  private registerUserSubscription() {
    this.userService.usersRemoved$.subscribe(() => this.onRemoval())
  }

  private onTasksAssigned() {
    this.users = this.userService.getUsers()
  }

  private onRemoval() {
    this.users = undefined
  }

  get isElementsEmpty(): boolean {
    if (this.users?.length == 0) {
      return true
    }
    return false
  }

}
