import {Component} from '@angular/core';

import {EventsComponent} from '../events/events.cmt';

@Component({
    selector: 'rock-parade',
    template: `<div><div class="core">Fuck off rock parade!!!</div>
                <events-list>Loading...</events-list></div>`,
    directives: [EventsComponent]
})
export class CoreComponent {
}