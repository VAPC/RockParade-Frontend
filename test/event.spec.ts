import {Event} from '../src/events/Event';

describe('Event Object', ()=> {
    var event: Event = {
        id: 1,
        title: 'Event title'
    };
    it('has id', ()=> {
        expect(event.id).toBe(1);
    });
    it('has title', ()=> {
        expect(event.title).toBe('Event title');
    });
});