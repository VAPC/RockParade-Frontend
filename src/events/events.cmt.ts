import {Component} from '@angular/core';
import {Event} from './Event';

@Component({
    selector: 'events-list',
    template: `<ul class="events">
                    <event-item *ngFor="let item of events" [event]="item"></event-item>
                </ul>`
})
export class EventsComponent {
    events: Array<Event>;

    constructor() {
    }
}
