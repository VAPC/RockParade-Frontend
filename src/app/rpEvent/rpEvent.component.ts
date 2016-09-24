import { Component, OnInit } from '@angular/core';
import {IEvent} from "../../models/IEvent";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rp-event-item',
  styleUrls: ['./rpEvent.component.css'],
  template: `<li>{{event.id}} <b>{{event.name}}</b></li>`
})
export class RPEventComponent implements OnInit {
  @Input()
  event: IEvent;
  constructor() { }

  ngOnInit() {
  }

}
