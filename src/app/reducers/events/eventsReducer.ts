import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { IEvent } from '../../models/IEvent';
import { IEvents } from '../../models/IEvents';
import { EventActions, EventActionTypes } from '../../actions/eventsActions';
import { createSelector } from 'reselect';

export interface State {
    ids: string[];
    entities: { [id: string]: IEvent };
    selectedEventId: string | any;
    total: number;
    limit: number;
    offset: number;
}

const initialState: State = {
    ids: [],
    entities: {},
    selectedEventId: null,
    total: 0,
    limit: 10,
    offset: 0
};

export function reducer(state = initialState, action?: EventActions): State {
    if (action) {
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
                    selectedEventId: state.selectedEventId,
                    limit: state.limit,
                    offset: state.offset,
                    total: state.total
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
                    selectedEventId: state.selectedEventId,
                    limit: state.limit,
                    offset: state.offset,
                    total: state.total
                };
            }

            case EventActionTypes.LOAD_EVENTS_COMPLETE: {
                const events = <IEvents>action.payload;
                const data = events.data;
                const ids = [];
                const entities = {};
                data.forEach((item) => {
                    ids.push(item.id);
                    entities[item.id] = item;
                });
                return {
                    ids,
                    entities,
                    selectedEventId: state.selectedEventId,
                    total: events.total,
                    limit: events.limit,
                    offset: events.offset
                };
            }

            case EventActionTypes.SELECT: {
                return {
                    ids: state.ids,
                    entities: state.entities,
                    selectedEventId: action.payload,
                    limit: state.limit,
                    offset: state.offset,
                    total: state.total
                };
            }

            default: {
                return state;
            }
        }
    } else {
        return state;
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

export const getEventEntities = (state: State) => state.entities;

export const getEventIds = (state: State) => state.ids;
export const getSelectedEventId = (state) => state.selectedEventId;

export const getSelectedEvent = createSelector(getEventEntities, getSelectedEventId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAllEvents = createSelector(getEventEntities, getEventIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});

