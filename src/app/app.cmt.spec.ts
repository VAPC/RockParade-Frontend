/// <reference path="../../typings/globals/jasmine/index.d.ts" />

import {inject, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.cmt';

describe('App: RockParade', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AppComponent ]
        });
    });

    it('should create the app',
        inject([AppComponent], (app: AppComponent) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'app works!\'',
        inject([AppComponent], (app: AppComponent) => {
            expect(app.title).toEqual('app works!');
        }));
});
