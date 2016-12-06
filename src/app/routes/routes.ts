import {Routes} from '@angular/router';
import {RPEventsListComponent} from '../rp-events-list/rp-events-list.component';
import {RPEventComponent} from '../rp-event/rp-event.component';

export const routes: Routes = [
    {
        path: '',
        component: RPEventsListComponent
    },
    {
        path: 'event/:id',
        component: RPEventComponent
    }
];
