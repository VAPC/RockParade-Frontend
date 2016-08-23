import {Event} from '../src/events/Event';

describe('Event', () => {
    it('has id', ()=> {
        let event:Event = {
            id: 1,
            title: 'Event Title'
        };
        expect(event.id).toBe(1);
    });
    it('has title', ()=> {
        let event:Event = {
            id: 1,
            title: 'Event Title'
        };
        expect(event.title).toBe('Event Title');
    });
});
