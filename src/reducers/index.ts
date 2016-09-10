import {Observable} from 'rxjs-es/Observable';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitevents.io/mostly-adequate-guide/content/ch5.html
 */
import {compose} from '../utils/compose';


/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import {combineReducers} from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import eventsReducer, * as fromEvents from './events';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
    events: fromEvents.IEvents;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const rootReducer = compose(combineReducers)({
    events: eventsReducer
});


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `events` state.
 *
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<AppState>) {
 * 	  this.eventsState$ = state$.let(getBooksState());
 * 	}
 * }
 * ```
 */
export function getEventsState() {
    return (state$: Observable<AppState>) => state$
        .subscribe(s => s.events);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the events state then we pass the state to the event
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 */
export function getEventEntities() {
    return compose(fromEvents.getEventEntities(), getEventsState());
}

export function getEvent(id: string) {
    return compose(fromEvents.getEvent(id), getEventsState());
}

export function hasEvent(id: string) {
    return compose(fromEvents.hasEvent(id), getEventsState());
}

export function getEvents(eventIds: string[]) {
    return compose(fromEvents.getEvents(eventIds), getEventsState());
}