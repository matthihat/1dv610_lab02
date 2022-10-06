import { Injectable } from '@angular/core';
import { ListOptions } from './list-options.model';

@Injectable({
  providedIn: 'root'
})
export class ListOptionsService {

  constructor() { }

  createUserListOptions(): ListOptions {
    const listOptions: ListOptions = {
      title: "Users",
      emptyListMessage: "No users added",
      cardTitle: "👤"
    }
    return listOptions
  }

  createTaskListOptions(): ListOptions {
    const listOptions: ListOptions = {
      title: "Tasks",
      emptyListMessage: "No tasks added",
      cardTitle: "✏️"
    }
    return listOptions
  }
}
