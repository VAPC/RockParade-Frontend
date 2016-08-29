import {Component, Inject} from '@angular/core';
import {EventComponent} from './event.cmt';
import {Event} from './Event';

@Component({
    selector: 'events-list',
    template: `<ul class="events">
                    <event-item *ngFor="let item of events" [event]="item"></event-item>
                </ul>`,
    providers: [],
    directives: [EventComponent]
})
export class EventsComponent {
    events: Array<Event>;

    constructor() {
    }
}
