import {Component, OnInit} from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoadEvents} from '../../actions/eventsActions';
import * as fromRoot from '../../reducers/index';


@Component({
    selector: 'rp-events-list',
    styleUrls: ['./rp-events-list.component.css'],
    template: `
        <h2>Events list: </h2>
        <ul class='events'>
          <rp-event *ngFor='let item of events$ | async' [event]='item'></rp-event>
        </ul>
    `
})
export class RPEventsListComponent implements OnInit {
    events$: Observable<IEvent[]>;

    constructor(private store: Store<fromRoot.State>) {
        this.events$ = store.let(fromRoot.getEventsCollection);
    }

    ngOnInit() {
        this.store.dispatch(new LoadEvents());
    }
}
