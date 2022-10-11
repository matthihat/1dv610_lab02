import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListOptions } from 'src/app/services/lists/list-options.model';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {

  @Input() listOptions: ListOptions | undefined;
  @Input() elements: string[] = [];
  @Output() clearListEvent = new EventEmitter()

  constructor() { }

  public shouldDisableClearButton(): boolean {
    if(this.elements.length < 1) {
      return true
    }
    return false
  }

  public handleClear() {
    this.clearListEvent.emit()
  }

  get isElementsEmpty(): boolean {
    if (this.elements.length == 0) {
      return true
    }
    return false
  }

  get title(): string {
    return this.listOptions ? this.listOptions.title : ""
  }

  get cardTitle(): string {
    return this.listOptions ? this.listOptions.cardTitle : ""
  }

  get emptyListMessage(): string {
    return this.listOptions ? this.listOptions.emptyListMessage : ""
  }
}
