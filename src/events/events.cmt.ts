import {Component, Inject} from '@angular/core';
import {EventComponent} from './event.cmt';
import {Event} from './Event';
import {EventService} from './events.srv';

@Component({
    selector: 'events-list',
    template: `<ul class="events">
                    <event-item *ngFor="let item of events" [event]="item"></event-item>
                </ul>`,
    providers: [EventService],
    directives: [EventComponent]
})
export class EventsComponent {
    events: Array<Event>;

    constructor(@Inject(EventService) eventService: EventService) {
        console.log('cl eventService', eventService);
    }
}
