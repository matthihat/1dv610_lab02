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
  public readonly taskAdded$ = this.taskSource.asObservable();
  public readonly tasksRemoved$ = this.tasksRemovedSource.asObservable()

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

  assignTasksToUsers() {
    const users = this.userService.getUsers()
    const nrOfTasks = this.tasks.length

    this.tasks.forEach(task => {
      const randomUser = this.userService.getRandomUser()
      randomUser.assignedTasks?.push(task)
      console.log(randomUser)
      }
      // randomUser.tasks = []
      // randomUser.tasks?.push(task)
    )

/*     users.forEach((user, index) => {
      const randomUser = this.userService.getRandomUser()
      const x = {
        name: randomUser.name,
        tasks: ['']
      }
      // x.y = [];
      if(index <= nrOfTasks) {
        x.tasks.push(this.tasks[index])
      }
      console.log(x)
    }) */
  }

  // private getTaskAt(index)
}
