import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  template: `
             <div>Parent component</div>
             <app-child [childMessage]="parentMessage" (messageEvent)="receiveMessage($event)"> </app-child>
             <div>Message: {{message}}</div>
             `,
  styles: ['']
})
export class AppComponent {
  parentMessage = "message from parent";
 
  @ViewChild(ChildComponent) child;
  constructor() { }
  
  message:string;
  ngAfterViewInit() {
    this.message = this.child.message
  }
  
  receiveMessage($event) {
    this.message = $event
  }
  ngOnInit() {
  }
}
