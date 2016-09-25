import 'rxjs/add/operator/let';
import {of} from 'rxjs/observable/of';
import {LoadEventsComplete} from '../../../src/actions/eventsActions';
import eventsReducer, * as fromEvents from './eventsReducer';
import {TestEvents} from 'eventsMock';

describe('Events', () => {
    describe('Reducer', () => {
        it('should have an empty initial state', () => {
            const initialState = eventsReducer(undefined);

            expect(initialState.ids).toEqual([]);
            expect(initialState.entities).toEqual({});
        });

        it('should add events collection to the entities table and theirs IDs to the IDs list when loaded', () => {
            const action = new LoadEventsComplete(TestEvents);
            const state = eventsReducer(undefined, action);
            const entities = {};
            TestEvents.data.forEach((item) => {
                entities[item.id] = item;
            });

            expect(state.ids).toEqual(TestEvents.data.map((item) => item.id));
            expect(state.entities).toEqual(entities);
        });
    });

    describe('Selectors', function () {
        describe('getEventEntities', function () {
            it('should get the entities table out of the events state', function () {
                const state = eventsReducer(undefined);

                of(state).let(fromEvents.getEventEntities).subscribe(entities => {
                    expect(entities).toBe(state.entities);
                });
            });
        });

        // describe('getEvent', function () {
        //     it('should get a selected event out of the events state', function () {
        //         const entities = {};
        //         TestEvents.data.forEach((item) => {
        //             entities[item.id] = item;
        //         });
        //         const state: fromEvents.State = {
        //             entities,
        //             ids: TestEvents.data.map((item) => item.id),
        //             selectedEventId: null,
        //             total: TestEvents.total,
        //             limit: TestEvents.limit,
        //             offset: TestEvents.offset
        //         };
        //
        //         of(state).let(fromEvents.getEvent(TestEvents.id)).subscribe(event => {
        //             expect(event).toBe(TestEvents);
        //         });
        //     });
        // });
        //
        // describe('getEvents', function () {
        //     it('should return all of the events in an array for a given list of ids', function () {
        //         const state: fromEvents.State = {
        //             entities: {
        //                 [TestEvents.id]: TestEvents
        //             },
        //             ids: [TestEvents.id]
        //         };
        //
        //         of(state).let(fromEvents.getEvents([TestEvents.id])).subscribe(events => {
        //             expect(events).toEqual([TestEvents]);
        //         });
        //     });
        // });
    });
});
