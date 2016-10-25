import {EventEffects} from './EventEffects';
import {TestBed, inject} from '@angular/core/testing';
import {EffectsTestingModule, EffectsRunner} from '@ngrx/effects/testing';
import {EventActionTypes} from '../actions/eventsActions';

describe('Event Effects', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            EventEffects
        ]
    }));
    let runner: EffectsRunner;
    let eventEffects: EventEffects;

    beforeEach(inject([
            EffectsRunner, EventEffects
        ],
        (_runner, _eventEffects) => {
            runner = _runner;
            eventEffects = _eventEffects;
        }
    ));

    it('should return a LOAD_EVENTS_COMPLETE action after loading events', () => {
        runner.queue({type: EventActionTypes.LOAD_EVENT});

        eventEffects.loadEvents$.subscribe(result => {
            expect(result).toEqual({type: EventActionTypes.LOAD_EVENTS_COMPLETE});
        });
    });
});
