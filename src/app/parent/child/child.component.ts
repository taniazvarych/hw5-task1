import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input () name = "" ;
  @Output() setLastName = new EventEmitter<string>();
  lastName = '' ;

  getLastName(){
    this.lastName = "Doe"
    this.setLastName.emit(this.lastName);
  }
  
}
