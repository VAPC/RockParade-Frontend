import '@ngrx/core/add/operator/select';
import 'rxjs-es/add/operator/map';
import {Observable} from 'rxjs-es/Observable';
import {Action} from '@ngrx/store';
import {IEvent} from '../models/IEvent';
import {EventActions} from '../actions/event';

export interface IEvents {
    entities: {[id: string]: IEvent};
    ids: string[];
    total: number;
    limit: number;
    offset: number;
}

const initialState: IEvents = {
    ids: [],
    entities: {},
    total: 0,
    limit: 0,
    offset: 0
};

export default function (state = initialState, action: Action): IEvents {
    switch (action.type) {
        case EventActions.SEARCH_COMPLETE:
        case EventActions.LOAD_COLLECTION_SUCCESS: {
            const events: IEvent[] = action.payload.data;
            const total = action.payload.total;
            const limit = action.payload.limit;
            const offset = action.payload.offset;
            const newEvents = events.filter(event => !state.entities[event.id]);

            const newEventIds = newEvents.map(event => event.id);
            const newEventEntities = newEvents.reduce((entities: { [id: string]: IEvent }, event: IEvent) => {
                return Object.assign(entities, {
                    [event.id]: event
                });
            }, {});

            return {
                ids: [...state.ids, ...newEventIds],
                entities: Object.assign({}, state.entities, newEventEntities),
                total,
                limit,
                offset
            };
        }

        case EventActions.LOAD_EVENT: {
            const event: IEvent = action.payload;

            if (state.ids.indexOf(event.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, event.id],
                entities: Object.assign({}, state.entities, {
                    [event.id]: event
                }),
                total: state.total,
                limit: state.limit,
                offset: state.offset
            };
        }

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export function getEventEntities() {
    return (state$: Observable<IEvents>) => state$
        .flatMap(s => s.entities);
}

export function getEvent(id: string) {
    return (state$: Observable<IEvents>) => state$
        .flatMap(s => s.entities[id]);
}

export function getEvents(eventIds: string[]) {
    return (state$: Observable<IEvents>) => state$
        .let(getEventEntities())
        .map(entities => eventIds.map(id => entities[id]));
}

export function hasEvent(id: string) {
    return (state$: Observable<IEvents>) => state$
        .subscribe(s => s.ids.indexOf(id) > -1);
}
