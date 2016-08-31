import 'rxjs-es/add/operator/catch';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/mapTo';
import 'rxjs-es/add/operator/filter';
import 'rxjs-es/add/operator/mergeMap';
import 'rxjs-es/add/operator/switchMap';
import 'rxjs-es/add/operator/switchMapTo';
import 'rxjs-es/add/operator/toArray';
import 'rxjs-es/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs-es/Observable';

import { AppState } from '../reducers';
import { EventActions } from '../actions/event';
import { IEvent } from '../models/IEvent';


@Injectable()
export class EventEffects {
    constructor(
        private actions$: Actions,
        private eventActions: EventActions
    ) { }

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
     * Official Docs: http://reactivex.io/rxjs-es/manual/overview.html#categories-of-operators
     * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
     */

    @Effect() loadCollectionOnInit$ = Observable.of(this.eventActions.loadCollection());
}
