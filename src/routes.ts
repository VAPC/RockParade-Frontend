import { RouterConfig } from '@angular/router';

// import { EventExistsGuard } from './guards';

const routes: RouterConfig = [
  {
    path: '',
    component: 'events-list'
  },
  {
    path: 'event/:id',
    // canActivate: [ EventExistsGuard ],
    component: 'event-item'
  }
];

export default routes;
