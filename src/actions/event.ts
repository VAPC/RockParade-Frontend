import { Action } from '@ngrx/store';
import { IEvent } from '../models/IEvent';
import { label } from '../utils/util';

/**
 * For each action type in an action group, we make a simple
 * enum object for all of our action types.
 *
 * The 'label' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * actions in the application are unique.
 */
export const EventActionTypes = {
    SEARCH: label('[Event] Search'),
    SEARCH_COMPLETE: label('[Event] Search Complete'),
    LOAD_EVENT: label('[Event] Load Event'),
    SELECT: label('[Event] Select'),
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in our reducer functions.
 */
export class SearchEvents implements Action {
    type = EventActionTypes.SEARCH;

    constructor(public payload: string) { }
}

export class SearchEventsComplete implements Action {
    type = EventActionTypes.SEARCH_COMPLETE;

    constructor(public payload: IEvent[]) { }
}

export class LoadEvent implements Action {
    type = EventActionTypes.LOAD_EVENT;

    constructor(public payload: IEvent) { }
}

export class SelectEvent implements Action {
    type = EventActionTypes.SELECT;

    constructor(public payload: string) { }
}

/**
 * We export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type EventActions =
    SearchEvents
        | SearchEventsComplete
        | LoadEvent
        | SelectEvent;