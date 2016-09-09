import {Component} from '@angular/core';

import {EventsComponent} from '../events/events.cmt';

@Component({
    selector: 'rock-parade',
    template: `
        <div class="page-holder" [ngStyle]="{'background-image': 'url('+mainBg+')'}">
            <div class="container">
                <header class="header">
                    <div class="header__logo-holder">RockParade</div>
                    <div class="header__menu-holder">
                        <navigation></navigation>                
                    </div>
                    <div class="header__profile-holder">
                        <img src="../assets/images/photo100.jpg" 
                        alt="John Smith"
                        class="header__avatar">
                        <div class="header__uname">John Smith</div>
                        
                    </div>
                </header>
                <div class="search-holder">
                    <input type="search" name="search" placeholder="Search">
                </div>
                <div class="content">
                    <section>Reload page, for new bg</section>
                    <section></section>
                    <section></section>
                </div>
            </div>
        </div>
    `,
    directives: [EventsComponent]
})
export class CoreComponent {
    public mainBg;

    constructor() {
        let len = 4;
        let rand = Math.floor(Math.random() * len) + 1;
        this.mainBg = '../assets/images/bg' + rand + '.jpg'
    }
}