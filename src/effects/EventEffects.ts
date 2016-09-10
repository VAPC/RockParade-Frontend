import { Observable } from 'rxjs-es';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { EventActions } from '../actions/event';

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
