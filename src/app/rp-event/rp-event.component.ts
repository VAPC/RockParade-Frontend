import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IEvent} from '../models/IEvent';

@Component({
    selector: 'rp-event',
    styleUrls: ['./rp-event.component.css'],
    template: `<li>{{event.id}} <b>{{event.name}}</b></li>`
})
export class RPEventComponent implements OnInit {
    @Input() event: IEvent;

    constructor() {
    }

    ngOnInit() {
    }

}
