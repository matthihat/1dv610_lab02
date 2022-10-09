import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/User.model';

@Component({
  selector: 'app-assigned-tasks-list',
  templateUrl: './assigned-tasks-list.component.html',
  styleUrls: ['./assigned-tasks-list.component.css']
})
export class AssignedTasksListComponent implements OnInit {

  @Input() users: User[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  get isElementsEmpty(): boolean {
    if (this.users?.length == 0) {
      return true
    }
    return false
  }

}
