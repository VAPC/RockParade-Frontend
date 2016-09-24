import {Routes} from '@angular/router';
import {RPEventComponent} from "../app/rpEvent/rpEvent.component";
import {RPEventsLayoutComponent} from "../app/rp-events-layout/rp-events-layout.component";

const routes: Routes = [
    {
        path: '',
        component: RPEventsLayoutComponent
    },
    {
        path: 'event/:id',
        component: RPEventComponent
    }
];

export default routes;
