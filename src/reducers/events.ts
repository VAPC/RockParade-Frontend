import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import {Observable} from 'rxjs/Observable';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {IEvent} from '../models/IEvent';
import {EventActions, EventActionTypes} from '../actions/event';


export interface State {
    ids: string[];
    entities: { [id: string]: IEvent };
    selectedEventId: string | any;
}

const initialState: State = {
    ids: [],
    entities: {},
    selectedEventId: null,
};

export function reducer(state = initialState, action: EventActions): State {
    switch (action.type) {
        case EventActionTypes.SEARCH_COMPLETE: {
            const events = <IEvent[]>action.payload;
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
                selectedEventId: state.selectedEventId
            };
        }

        case EventActionTypes.LOAD_EVENT: {
            const event = <IEvent>action.payload;

            if (state.ids.indexOf(event.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, event.id],
                entities: Object.assign({}, state.entities, {
                    [event.id]: event
                }),
                selectedEventId: state.selectedEventId
            };
        }

        case EventActionTypes.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedEventId: action.payload
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

export function getEventEntities(state$: Observable<State>) {
    return state$.select(state => state.entities);
}

export function getEventIds(state$: Observable<State>) {
    return state$.select(state => state.ids);
}

export function getSelectedEventId(state$: Observable<State>) {
    return state$.select(state => state.selectedEventId);
}

export function getSelectedEvent(state$: Observable<State>) {
    return combineLatest<{ [id: string]: IEvent }, string>(
        state$.let(getEventEntities),
        state$.let(getSelectedEventId)
    )
        .map(([ entities, selectedEventId ]) => entities[selectedEventId]);
}

export function getAllEvents(state$: Observable<State>) {
    return combineLatest<{ [id: string]: IEvent }, string[]>(
        state$.let(getEventEntities),
        state$.let(getEventIds)
    )
        .map(([ entities, ids ]) => ids.map(id => entities[id]));
}