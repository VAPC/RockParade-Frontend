import {Routes} from '@angular/router';
import {RPEventComponent} from '../app/rp-event/rp-event.component';
import {RPEventsListComponent} from '../app/rp-events-list/rp-events-list.component';

const routes: Routes = [
    {
        path: '',
        component: RPEventsListComponent
    },
    {
        path: 'event/:id',
        component: RPEventComponent
    }
];

export default routes;
