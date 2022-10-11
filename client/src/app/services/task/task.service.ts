import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user/User.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];
  private taskSource = new Subject<string>()
  private tasksRemovedSource = new Subject<boolean>()
  private tasksAssignedSource = new Subject<boolean>()
  public readonly taskAdded$ = this.taskSource.asObservable();
  public readonly tasksRemoved$ = this.tasksRemovedSource.asObservable()
  public readonly tasksAssigned$ = this.tasksAssignedSource.asObservable();

  constructor(private userService: UserService) { }

  addTask(task: string) {
    this.tasks.push(task)
    this.taskSource.next(task);
  }

  getTasks(): string[] {
    return this.tasks
  }

  removeTasks() {
    this.tasks = []
    this.tasksRemovedSource.next(true)
  }

  /**
  * Assigns tasks to users in a randomly fashion.
  *
  * @throws {Error} - Error if no user exists.
  */
  assignTasksToUsers() {
    this.tasks.forEach(task => {
      const randomUser = this.userService.getRandomUser()
      randomUser.assignedTasks?.push(task)
      }
    )
    this.tasksAssignedSource.next(true)
  }
}
