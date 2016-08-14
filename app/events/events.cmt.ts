import {Component} from '@angular/core';
import {Event} from './Event';
import {EventComponent} from './event.cmt';

const Events:Event[] = [
    {id: 11, title: 'Soccer'},
    {id: 12, title: 'Hokey'},
    {id: 13, title: 'Snooker'},
];

@Component({
    selector: 'events-list',
    template: `<ul class="events">
                    <event-item *ngFor="let item of events" [event]="item"></event-item>
                </ul>`,
    directives: [EventComponent]
})
export class EventsComponent {
    events = Events;
    constructor() {
        console.log('cl EventsComponent', this);
    }
}
