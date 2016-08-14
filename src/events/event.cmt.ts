import {Component, Input} from '@angular/core';
import {Event} from './Event';

@Component({
    selector: 'event-item',
    template: `<li>{{event.id}} <b>{{event.title}}</b></li>`
})
export class EventComponent {
    @Input()
    event: Event;
    constructor() {
        console.log('cl EventComponent', this);
    }
}
