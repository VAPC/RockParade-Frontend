import {Routes} from '@angular/router';
import {RPEventsComponent} from "../app/rpEvents/rpEvents.component";
import {RPEventComponent} from "../app/rpEvent/rpEvent.component";

const routes: Routes = [
    {
        path: '',
        component: RPEventsComponent
    },
    {
        path: 'event/:id',
        component: RPEventComponent
    }
];

export default routes;
