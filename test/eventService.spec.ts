import {EventService} from '../src/events/events.srv';

describe('Event Service', ()=> {

    var eventService = new EventService();

    it('should be initializing', ()=> {
        var events = eventService.getEvents();
        expect(events).toEqual([
            {id: 11, title: 'Soccer'},
            {id: 12, title: 'Hokey'},
            {id: 13, title: 'Snooker'}
        ]);
    });
});
