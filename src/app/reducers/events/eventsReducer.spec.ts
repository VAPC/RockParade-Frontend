import 'rxjs/add/operator/let';
import { of } from 'rxjs/observable/of';
import * as fromEvents from './eventsReducer';
import { TestEvents } from './eventsMock';
import { LoadEventsComplete } from '../../actions/eventsActions';

describe('Events', () => {
    describe('Reducer', () => {
        it('should have an empty initial state', () => {
            const initialState = fromEvents.reducer(undefined);

            expect(initialState.ids).toEqual([]);
            expect(initialState.entities).toEqual({});
            expect(initialState.selectedEventId).toEqual(null);
            expect(initialState.total).toEqual(0);
            expect(initialState.limit).toEqual(10);
            expect(initialState.offset).toEqual(0);
        });

        it('should add events collection to the entities table and theirs IDs to the IDs list when loaded', () => {
            const action = new LoadEventsComplete(TestEvents);
            const state = fromEvents.reducer(undefined, action);
            const entities = {};
            TestEvents.data.forEach((item) => {
                entities[item.id] = item;
            });

            expect(state.ids).toEqual(TestEvents.data.map((item) => item.id));
            expect(state.entities).toEqual(entities);
            expect(state.total).toEqual(1);
            expect(state.limit).toEqual(50);
            expect(state.offset).toEqual(0);
        });
    });

    describe('Selectors', function () {
        describe('getEventEntities', function () {
            // it('should get the entities table out of the events state', function () {
            //     const state = fromEvents.reducer(undefined);
            //
            //     of(state).let(fromEvents.getEventEntities).subscribe(entities => {
            //         expect(entities).toBe(state.entities);
            //     });
            // });
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
