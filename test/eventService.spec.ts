//import {EventService} from '../src/events/events.srv';

xdescribe('Event Service', ()=> {
    let eventService = new EventService();
    it('should be', () => {
        var events = eventService.getEvents();
        expect(events).toBe([
            {id: 11, title: 'Soccer'},
            {id: 12, title: 'Hokey'},
            {id: 13, title: 'Snooker'},
        ]);
    });
});
