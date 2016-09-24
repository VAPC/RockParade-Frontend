import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {EventActions, EventActionTypes, LoadEventsComplete} from "../actions/eventsActions";
import {empty} from "rxjs/observable/empty";
import {EventsEndpointService} from "../app/events-endpoint.service";
import {Observable} from "rxjs";


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class EventEffects {
    constructor(private actions$: Actions, private eventsEndpointService: EventsEndpointService) {
    }

    @Effect() loadEvents$ = this.actions$
        .ofType(EventActionTypes.LOAD_EVENTS)
        .map<{limit: number, offset: number}>(action => action.payload)
        .switchMap(query => {
            return this.eventsEndpointService.loadEvents(query)
                .map(events => new LoadEventsComplete(events))
                .catch(() => Observable.of(new LoadEventsComplete({
                    data: [],
                    total: 0,
                    limit: 0,
                    offset: 0
                })))
        });
}
