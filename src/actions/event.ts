import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IEvent } from '../models/IEvent';


/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class EventActions {
  static SEARCH = '[Event] Search';
  search(query: string): Action {
    return {
      type: EventActions.SEARCH,
      payload: query
    };
  }

  static SEARCH_COMPLETE = '[Event] Search Complete';
  searchComplete(results: IEvent[]): Action {
    return {
      type: EventActions.SEARCH_COMPLETE,
      payload: results
    };
  }

  static ADD_TO_COLLECTION = '[Event] Add to Collection';
  addToCollection(Event: IEvent): Action {
    return {
      type: EventActions.ADD_TO_COLLECTION,
      payload: Event
    };
  }

  static ADD_TO_COLLECTION_SUCCESS = '[Event] Add to Collection Success';
  addToCollectionSuccess(Event: IEvent): Action {
    return {
      type: EventActions.ADD_TO_COLLECTION_SUCCESS,
      payload: Event
    };
  }

  static ADD_TO_COLLECTION_FAIL = '[Event] Add to Collection Fail';
  addToCollectionFail(Event: IEvent): Action {
    return {
      type: EventActions.ADD_TO_COLLECTION_FAIL,
      payload: Event
    };
  }

  static REMOVE_FROM_COLLECTION = '[Event] Remove from Collection';
  removeFromCollection(Event: IEvent): Action {
    return {
      type: EventActions.REMOVE_FROM_COLLECTION,
      payload: Event
    };
  }

  static REMOVE_FROM_COLLECTION_SUCCESS = '[Event] Remove From Collection Success';
  removeFromCollectionSuccess(Event: IEvent): Action {
    return {
      type: EventActions.REMOVE_FROM_COLLECTION_SUCCESS,
      payload: Event
    };
  }

  static REMOVE_FROM_COLLECTION_FAIL = '[Event] Remove From Collection Fail';
  removeFromCollectionFail(Event: IEvent): Action {
    return {
      type: EventActions.REMOVE_FROM_COLLECTION_FAIL,
      payload: Event
    };
  }

  static LOAD_COLLECTION = '[Event] Load Collection';
  loadCollection(): Action {
    return {
      type: EventActions.LOAD_COLLECTION
    };
  }

  static LOAD_COLLECTION_SUCCESS = '[Event] Load Collection Success';
  loadCollectionSuccess(Events: IEvent[]): Action {
    return {
      type: EventActions.LOAD_COLLECTION_SUCCESS,
      payload: Events
    };
  }

  static LOAD_EVENT = '[Event] Load Event';
  loadEvent(Event: IEvent): Action {
    return {
      type: EventActions.LOAD_EVENT,
      payload: Event
    };
  }
}
