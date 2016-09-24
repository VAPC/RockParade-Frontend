import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IEvent} from "../../models/IEvent";
import {Store} from "@ngrx/store";
import {LoadEvents} from "../../actions/eventsActions";
import * as fromRoot from "../../reducers/index";

@Component({
    selector: 'rp-events-layout',
    styleUrls: ['./rp-events-layout.component.css'],
    templateUrl: `
        <h1>RockParade events</h1>
        <rp-events [events]="events$ | async"></rp-events>
    `,
})
export class RPEventsLayoutComponent implements OnInit {
    events$: Observable<IEvent[]>;

    constructor(private store: Store<fromRoot.State>) {
        this.events$ = store.let(fromRoot.getEventsCollection);
    }

    ngOnInit() {
        this.store.dispatch(new LoadEvents());
    }
}
