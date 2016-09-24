import {Component, OnInit} from '@angular/core';
import {LoadEvents} from "../../actions/eventsActions";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IEvent} from "../../models/IEvent";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'rp-events',
    styleUrls: ['./rpEvents.component.css'],
    template: `
    <ul class="events">
      <rp-event-item *ngFor="let item of events" [event]="item"></rp-event-item>
    </ul>
  `
})
export class RPEventsComponent {
    @Input() events: IEvent[];
}
