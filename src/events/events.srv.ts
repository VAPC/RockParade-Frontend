import {Injectable} from '@angular/core';
import {Event} from 'Event';
import {EVENTS} from './mock-events'

@Injectable()
export class EventService {
    eventList:Array<Event>;

    getEvents() {
        return EVENTS;
    }
}