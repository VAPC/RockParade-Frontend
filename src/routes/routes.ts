import {Routes} from '@angular/router';
import {EventsComponent} from '../events/events.cmt'
import {EventComponent} from '../events/event.cmt'

const routes: Routes = [
    {
        path: '',
        component: EventsComponent
    },
    {
        path: 'event/:id',
        component: EventComponent
    }
];

export default routes;
