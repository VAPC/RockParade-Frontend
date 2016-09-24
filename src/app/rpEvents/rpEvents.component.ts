import { Component, OnInit } from '@angular/core';
import {IEvent} from "../../models/IEvent";

@Component({
  selector: 'rp-events',
  styleUrls: ['./rpEvents.component.css'],
  template: `
    <ul class="events">
      <rp-event-item *ngFor="let item of events" [event]="item"></rp-event-item>
    </ul>
  `
})
export class RPEventsComponent implements OnInit {
  events: Array<IEvent>;
  constructor() { }

  ngOnInit() {
    this.events = [
      {
        id: '1',
        date: '12-13-14',
        name: 'koko jamba',
        description: 'ya-ya yeah'
      }
    ]
  }

}
