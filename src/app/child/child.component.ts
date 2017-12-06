import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div> Say {{childMessage}} </div>
             <button (click)="sendMessage()">Send Message</button>`,
  styles: ['']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  message: string = "Hello child!";
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  constructor() { }

  ngOnInit() {
  }

}
